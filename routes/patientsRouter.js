const express = require('express');
const router = express.Router();
const multer = require("multer");
const mongoose = require('mongoose');
const { spawn } = require('child_process');

function runPythonScript(scriptPath, args) {

    // Use child_process.spawn method from 
    // child_process module and assign it to variable
    const pyProg = spawn('python', [scriptPath].concat(args));
  
    // Collect data from script and print to console
    let data = '';
    pyProg.stdout.on('data', (stdout) => {
      data += stdout.toString();
    });
  
    // Print errors to console, if any
    pyProg.stderr.on('data', (stderr) => {
      console.log(`stderr: ${stderr}`);
    });
  
    // When script is finished, print collected data
    pyProg.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
      console.log(data);
    });
}

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
});

router.post("/predict-patient", function(req, res) {
  data = req.body.data;
  arg1 = data
  console.log("Call predict: ", req.body.data);
  runPythonScript("./routes/main2.py", [arg1]);
  return res.send(data)
})

module.exports = router;