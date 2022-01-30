const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// importing routes
const patientRoute = require('./routes/patient');
const doctorRoute = require('./routes/doctor'); 

const app = express();
const PORT = process.env.PORT || 4000;

require('dotenv').config();

// add middleware
app.use(cors());
app.use(express.json());

// add routes as middleware
app.use('/patients', patientRoute);
app.use('/doctors', doctorRoute);

// connecting to the database
const url = process.env.DATABASE_URL;
mongoose.connect(url);

const connection = mongoose.connection;

connection.once('open', () =>{
  console.log('Application is connected to the database successfully!');
})


app.listen(PORT, () =>{
  console.log(`Server running on port ${PORT}`);
});

