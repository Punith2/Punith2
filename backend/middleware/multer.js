// middleware/multer.js
const multer = require('multer');

const storage = multer.memoryStorage(); // You can customize storage as needed

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // Example: limit to 5MB
});

module.exports = upload;
