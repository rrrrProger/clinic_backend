const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

//const Product = mongoose.model('Product', productSchema);

module.exports = mongoose.models.patientSchema || mongoose.model('Patient', patientSchema);
