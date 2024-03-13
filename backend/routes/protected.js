// routes/protected.js
const express = require('express');
const authenticate = require('../middleware/authenticate');


const router = express.Router();

router.get('/protected-route', authenticate, (req, res) => {
  res.status(200).json({ message: 'Access granted to protected route', userId: req.userId });
});

module.exports = router;
