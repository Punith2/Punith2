    // backend/database.js
const mongoose = require('mongoose');
const Disease = require('../models/Disease');

const DiseaseDetailsSchema = new mongoose.Schema({
  // Define your schema fields
  name: String,
  severity: String,
  // ... other fields
});

const DiseaseDetails = mongoose.model('DiseaseDetails', DiseaseDetailsSchema);

module.exports = {
  DiseaseDetails,
};

// Function to save disease details to the database
async function saveDiseaseDetails(name, description) {
    try {
      const newDisease = new Disease({ name, description });
      await newDisease.save();
      console.log('Disease details saved successfully.');
    } catch (error) {
      console.error('Error saving disease details:', error);
    }
  }
// Function to retrieve all disease details from the database
async function getAllDiseaseDetails() {
    try {
      const diseases = await Disease.find();
      console.log('All disease details:', diseases);
      return diseases;
    } catch (error) {
      console.error('Error retrieving disease details:', error);
      return [];
    }
  }
  
  module.exports = { saveDiseaseDetails, getAllDiseaseDetails };  