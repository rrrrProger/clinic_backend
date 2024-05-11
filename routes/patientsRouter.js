const express = require('express');
const router = express.Router();
const multer = require("multer");
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://tsymbaljuk2001:messi10ronaldo7@cluster0.k870rvy.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.set('debug', true);

router.post("/card", multer().array("files"), function (req, res) {
  const db = mongoose.connection.useDb('foo', {
    // `useCache` tells Mongoose to cache connections by database name, so
    // `mongoose.connection.useDb('foo', { useCache: true })` returns the
    // same reference each time.
    useCache: true
  });
  // Need to register models every time a new connection is created
  if (!db.models['User']) {
    db.model('User', mongoose.Schema({ name: String }));
  }

  const Patient = mongoose.model('User', mongoose.Schema({ name: String }));
  const p = new Patient;
  p.name = "XRoma";
  p.save();

  console.log("body: ", req.body);
  console.log("files:", req.files);
  return res.sendStatus(200);
});

module.exports = router;
