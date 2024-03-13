const mongoose = require('mongoose');

const diseaseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  preventation: { type: String, required: true }, // Add more fields as needed based on your requirements
});

module.exports = mongoose.model('Disease', diseaseSchema);
