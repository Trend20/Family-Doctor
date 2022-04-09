const { model } = require('mongoose');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const doctorSchema = new Schema({
  username: {type: String, required: true},
  email: {type: String, required: true},
  mobile: {type: String, required: true},
},{
  timestamps: true
});

const Doctor = mongoose.model('Doctor', doctorSchema);
model.exports = Doctor;