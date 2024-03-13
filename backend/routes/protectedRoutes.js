// routes/protectedRoutes.js
const express = require('express');
const router = express.Router();

// Example protected route
router.get('/example', (req, res) => {
  res.json({ message: 'This is a protected route' });
});

module.exports = router;
