// DiseaseDetails.js
import React, { useState } from 'react';

const DiseaseDetails = () => {
  const [selectedDisease, setSelectedDisease] = useState(null);

  // Simulating disease details
  const simulateDiseaseDetails = () => {
    // Implement your logic to simulate disease details (replace with actual backend call)
    const simulatedDetails = {
      name: 'Disease A',
      description: 'This is a description of Disease A.',
      treatment: 'Recommended treatment for Disease A.',
    };
    setSelectedDisease(simulatedDetails);
  };

  return (
    <div>
      <h2>Disease Details</h2>
      <button type="button" onClick={simulateDiseaseDetails}>
        Simulate Disease Details
      </button>
      {selectedDisease && (
        <div>
          <h3>{selectedDisease.name}</h3>
          <p>Description: {selectedDisease.description}</p>
          <p>Treatment: {selectedDisease.treatment}</p>
        </div>
      )}
    </div>
  );
};

export default DiseaseDetails;
