import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

// importing routes
const patientRoute = require('./routes/patient');
const doctorRoute = require('./routes/doctor'); 


const app = express();
const PORT = process.env.PORT || 4000;

// add middleware
app.use(cors());
app.use(express.json());

// add routes as middleware
app.use('/patients', patientRoute);
app.use('/doctors', doctorRoute);


app.listen(PORT, () =>{
  console.log(`Server running on port ${PORT}`);
});

