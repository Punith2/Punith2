import React, { useEffect } from 'react';
import axios from 'axios';

const YourComponent = () => {
  useEffect(() => {
    // Example API call to fetch all disease details
    axios.get('/api/disease/all')
      .then(response => {
        console.log(response.data);
        // Process the data as needed
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
    <h1>Disease Details</h1>
    <ul>
      {diseaseDetails.map(disease => (
        <li key={disease._id}>
          <strong>Name:</strong> {disease.name}, <strong>Description:</strong> {disease.description}
        </li>
      ))}
    </ul>
  </div>
    // Your component JSX
  );
};

export default YourComponent;
