const express = require('express');
const router = express.Router();
const patient = require('../models/patient'); // Adjust the path as needed

// GET /api/products
router.post('/card', async (req, res) => {
  console.error('Hi here');
});

module.exports = router;
