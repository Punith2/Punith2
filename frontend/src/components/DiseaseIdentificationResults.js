// DiseaseIdentificationResults.js
import React from 'react';

const DiseaseIdentificationResults = ({ identifiedDiseases }) => {
  const diseaseInfo = {
    'Bacterial_Spot': {
      description: 'Bacterial spot is a common disease affecting tomato plants. It is caused by the bacterium Xanthomonas campestris. Symptoms include small water-soaked lesions on leaves, which later turn brown with a yellow halo. To prevent bacterial spot, practice good crop management, use disease-resistant varieties, and avoid overhead irrigation.'
    },
    'Black_Mold': {
      description: 'Black mold, also known as sooty mold, is a fungal disease that often occurs as a result of honeydew secretions from sap-sucking insects like aphids. The mold appears as a black, sooty substance on leaves and stems. To prevent black mold, control the underlying insect pests, such as aphids, and maintain good plant hygiene.'
    },
    'Early_Blight': {
      description: 'Early blight is a common fungal disease affecting tomatoes. It is caused by the fungus Alternaria solani. Symptoms include dark brown spots with concentric rings on lower leaves. To manage early blight, use disease-resistant varieties, practice crop rotation, and apply fungicides preventatively.'
    },
    'Gray_Spot': {
      description: 'Gray spot, caused by the fungus Stemphylium solani, affects tomato plants. Symptoms include grayish-brown lesions with a yellow halo. To control gray spot, use disease-resistant varieties, practice good sanitation, and avoid overhead irrigation.'
    },
    'Healthy': {
      description: 'No signs of disease were identified. Continue regular plant care and monitoring.'
    },
    'Late_Miner': {
      description: 'Late blight, caused by the oomycete Phytophthora infestans, is a destructive disease affecting tomatoes. Symptoms include dark lesions with a water-soaked appearance. To prevent late blight, use disease-resistant varieties, practice good ventilation, and apply fungicides preventatively.'
    },
    'Late_blight': {
      description: 'Late blight, caused by the oomycete Phytophthora infestans, is a destructive disease affecting tomatoes. Symptoms include dark lesions with a water-soaked appearance. To prevent late blight, use disease-resistant varieties, practice good ventilation, and apply fungicides preventatively.'
    },
    'Magnesium_Deficiency': {
      description: 'Magnesium deficiency in plants leads to yellowing of leaves, starting from the edges and progressing inwards. To address magnesium deficiency, apply magnesium-containing fertilizers and maintain proper soil pH.'
    },
    'Nitrogen_Deficiency': {
      description: 'Nitrogen deficiency results in pale green or yellow leaves, especially in older leaves. To address nitrogen deficiency, apply nitrogen-containing fertilizers and ensure proper soil nutrient levels.'
    },
    'Pottassium_Deficiency': {
      description: 'Potassium deficiency causes yellowing and browning of leaf margins. To address potassium deficiency, apply potassium-containing fertilizers and maintain balanced soil nutrient levels.'
    },
    'Spotted_Wilt_Virus': {
      description: 'Spotted wilt virus is a viral disease transmitted by thrips. Symptoms include yellowing, mottling, and necrosis on leaves. To manage spotted wilt virus, control thrips populations, use virus-resistant varieties, and practice crop rotation.'
    },
    'Powdery_Mildew': {
      description: 'Powdery mildew is a fungal disease characterized by white, powdery growth on leaves. It is caused by various fungi. To prevent powdery mildew, provide good air circulation, avoid overhead irrigation, and apply fungicides preventatively.'
    }
  };

  return (
    <div>
      <h2>Disease Identification Results</h2>
      {identifiedDiseases.length > 0 ? (
        <div>
          <h3>Results:</h3>
          <ul>
            {identifiedDiseases.map((disease, index) => (
              <li key={index}>
                <strong>{disease}</strong>
                <p>Description: {diseaseInfo[disease].description}</p>
                <p>Prevention: {diseaseInfo[disease].prevention}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No diseases identified.</p>
      )}
    </div>
  );
};

export default DiseaseIdentificationResults;
