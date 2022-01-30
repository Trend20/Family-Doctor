const { model } = require('mongoose');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const patientSchema = new Schema({
  username: {type: String, required: true},
  email: {type: String, required: true},
  mobile: {type: String, required: true},
  message: {type: String, required: true},
},{
  timestamps: true
});

const Patient = mongoose.model('Patient', patientSchema);
model.exports = Patient;