const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const protectedRoutes = require('./routes/protected');
const config = require('./config/config');
const tf = require('@tensorflow/tfjs-node');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// Load the TensorFlow.js model asynchronously
async function loadModel() {
  try {
    const model = await tf.loadLayersModel('file://C:/saved_model/tomato2.h5');
    return model;
  } catch (error) {
    console.error('Error loading the model:', error);
    throw error; // Rethrow the error to handle it elsewhere if needed
  }
}

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/protected', protectedRoutes);
app.use('/api/images', require('./routes/images'));
app.use('/api/database', require('./routes/database'));

// Update the endpoint to handle disease detection
app.post('/your-detection-endpoint', async (req, res) => {
  try {
    // Handle the image data (you might want to use a library like multer for handling file uploads)
    const imageData = req.body.image; // Assuming the image is sent as JSON

    // Load the model
    const model = await loadModel();

    // Use your disease detection model to predict the disease
    const predictedDisease = await model.predict(imageData);

    // Send the predicted disease back to the client
    res.status(200).json({ result: predictedDisease });
  } catch (error) {
    console.error('Error handling image:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
