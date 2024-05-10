const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;
var serveStatic = require('serve-static')
const path = require('path');


//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/dist')))

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
    res.sendFile(path.join(__dirname, '/dist/index.html'))
})

mongoose.connect('mongodb+srv://tsymbaljuk2001:messi10ronaldo7@cluster0.k870rvy.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const productRoutes = require('./routes/productRoutes'); // Adjust the path as needed

app.use(bodyParser.json());
app.use(productRoutes);

app.listen(process.env.PORT | port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;
