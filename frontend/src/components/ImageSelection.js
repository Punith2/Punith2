// ImageSelection.js
import React, { useState } from 'react';

const ImageSelection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleImageUpload = async () => {
    if (selectedImage) {
      try {
        console.log('Uploading image...');
        const formData = new FormData();
        formData.append('image', selectedImage);
  
        const response = await fetch('http://localhost:3000/your-detection-endpoint', {
          method: 'POST',
          body: formData,
        });
  
        if (response.ok) {
          const result = await response.json();
          console.log('Detection result:', result);
        } else {
          console.error('Error uploading image:', response.statusText);
        }
      } catch (error) {
        console.error('Error uploading image:', error.message);
      }
    } else {
      console.log('No image selected.');
    }
  };
  

  const handleCameraUpload = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  
      // Handle the camera stream (e.g., display it in a video element)
      const video = document.createElement('video');
      video.srcObject = stream;
      video.autoplay = true;
  
      // Append the video element to the document (you might want to customize this)
      document.body.appendChild(video);
  
      // Add a button for capturing the image
      const captureButton = document.createElement('button');
      captureButton.innerText = 'Capture Image';
      captureButton.addEventListener('click', () => handleCaptureImage(stream));
      document.body.appendChild(captureButton);
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };
  
  const handleCaptureImage = async (stream) => {
    // Create a canvas element to capture the image
    const canvas = document.createElement('canvas');
    const video = document.querySelector('video');
  
    // Set the canvas dimensions to match the video stream
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
  
    // Draw the current video frame onto the canvas
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
  
    // Stop the video stream (optional)
    stream.getTracks().forEach((track) => track.stop());
  
    // Convert the canvas content to a data URL (base64 encoded image)
    const capturedImage = canvas.toDataURL('image/png');
    console.log('Captured Image:', capturedImage);
  
    // Now, you can upload the captured image to your server for disease detection
    try {
      const formData = new FormData();
      formData.append('image', capturedImage);
  
      const response = await fetch('http://localhost:3000/your-detection-endpoint', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        // Successfully uploaded and detected diseases
        const result = await response.json();
        console.log('Detection Results:', result);
        // Update the state or perform any other actions based on the detection results
      } else {
        console.error('Error uploading image:', response.statusText);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };
  
  
  return (
    <div>
      <h2>Image Selection</h2>
      <label>
        Select Image from Library:
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </label>
      {selectedImage && (
        <div>
          <h3>Selected Image Preview:</h3>
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Selected"
            style={{ maxWidth: '100%' }}
          />
        </div>
      )}
      <br />
      <button type="button" onClick={handleImageUpload}>
        Upload Image
      </button>
      <br />
      <button type="button" onClick={handleCameraUpload}>
        Upload from Camera
      </button>
    </div>
  );
};

export default ImageSelection;
