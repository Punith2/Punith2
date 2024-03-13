// backend/routes/images.js
const express = require('express');
const upload = require('../middleware/multer');
const { identifyDisease } = require('./diseaseIdentification');
const { DiseaseDetails } = require('../database');
const database = require('../controllers/database');



const router = express.Router();

router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    // Process the uploaded image
    const imageBuffer = req.file.buffer;

    // Identify disease using the deep learning model
    const predictions = await identifyDisease(imageBuffer);

    const diseaseDetails = new DiseaseDetails({
        name: predictions.name,
        severity: predictions.severity,
        // ... other fields
    });
    await diseaseDetails.save();
    // Save disease details to the database
    const identifiedDiseaseName = 'Bacterial Spot';  // Replace with actual identified disease name
    const identifiedDiseaseDescription = 'Description of Bacterial Spot';  // Replace with actual description
    database.saveDiseaseDetails(identifiedDiseaseName, identifiedDiseaseDescription);

    // Save or send the results as needed
    // ...

    res.status(200).json({ message: 'Image processed and details saved' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
