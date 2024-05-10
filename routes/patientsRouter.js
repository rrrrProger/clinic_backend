const express = require('express');
const router = express.Router();
const patient = require('../models/patient'); // Adjust the path as needed
const multer = require("multer");

// GET /api/products
router.post("/card", multer().array("files"), function (req, res) {
  console.log("body: ", req.body);
  console.log("files:", req.files);
  return res.sendStatus(200);
});

module.exports = router;
