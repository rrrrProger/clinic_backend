const express = require('express');
const router = express.Router();
const multer = require("multer");
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://tsymbaljuk2001:messi10ronaldo7@cluster0.k870rvy.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.set('debug', true);

const db = mongoose.connection.useDb('foo', {
  useCache: true
});

if (!db.models['User']) {
  db.model('User', mongoose.Schema({ name: String, buf: Buffer }));
}

const Patient = mongoose.model('User', mongoose.Schema({ name: String, buf: Buffer }));

router.post("/card", multer().array("files"), function (req, res) {
  for (let file of req.files) {
    const p = new Patient;

    p.name = file.originalname;
    p.buf = file.buffer;
    p.save();
  }

  return res.sendStatus(200);
});

router.post("/mrt-files", function(req, res) {
  console.log('Patient name: ', req.body.name);
  Patient.find().then((data) => {
    return res.status(200).send(data);
  });
})

module.exports = router;