// App.js
import React, { useState } from 'react';
import './styles/styles.css'; // Import your styles
import Registration from './components/Registration';
import Authentication from './components/Authentication';
import ImageSelection from './components/ImageSelection';
import DiseaseIdentificationResults from './components/DiseaseIdentificationResults';

const App = () => {
  const [identifiedDiseases, setIdentifiedDiseases] = useState([]);

  const diseaseNames = [
    'Bacterial_Spot',
    'Black_Mold',
    'Early_Blight',
    'Gray_Spot',
    'Healthy',
    'Late_Miner',
    'Late_blight',
    'Magnesium_Deficiency',
    'Nitrogen_Deficiency',
    'Pottassium_Deficiency',
    'Spotted_Wilt_Virus',
    'Powdery_Mildew'
  ];

  // Simulate disease identification process
  const simulateDiseaseIdentification = () => {
    // Replace this simulation with your actual logic for disease identification
    const randomDiseaseIndex = Math.floor(Math.random() * diseaseNames.length);
    const identifiedDisease = diseaseNames[randomDiseaseIndex];

    // Update the state with the identified disease
    setIdentifiedDiseases([identifiedDisease]);
  };

  return (
    <div className="container">
      <Registration />
      <hr />
      <Authentication />
      <hr />
      <ImageSelection />
      <hr />

      {/* Button to simulate disease identification */}
      <button onClick={simulateDiseaseIdentification}>
        Simulate Disease Identification
      </button>

      {/* Display disease identification results */}
      <DiseaseIdentificationResults identifiedDiseases={identifiedDiseases} />
    </div>
  );
};

export default App;
