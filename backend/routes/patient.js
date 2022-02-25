const express = require('express');

const router = express.Router();

const Patient = require('../models/patient.model');

router.route('/patient').get((req, res) =>{
      Patient.find()
             .then(patient => res.json(patient))
             .catch(error => res.status(400).json('Error ' + error))
});

router.route('/patient').post((req, res) =>{
  const username = req.body.username;
  const email = req.body.email;
  const mobile = req.body.mobile;
  const message = req.body.message;

  const newPatient = new Patient({username, email, mobile, message});
  newPatient.save()
            .then(() => res.json('Patient added!!'))
            .catch(error => res.status(400).json('Error ' + error))
});

module.exports = router;