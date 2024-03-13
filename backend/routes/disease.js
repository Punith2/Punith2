const express = require('express');
const database = require('../controllers/database');
const Disease = require('../models/Disease');


const router = express.Router();

// Endpoint to save disease details
router.post('/save', async (req, res) => {
  const { name, description, preventation } = req.body;
  await database.saveDiseaseDetails(name, description, preventation);
  res.status(201).json({ message: 'Disease details saved successfully' });
});

// Endpoint to fetch all disease details
router.get('/all', async (req, res) => {
  const diseases = await database.getAllDiseaseDetails();
  res.status(200).json(diseases);
});

module.exports = router;
