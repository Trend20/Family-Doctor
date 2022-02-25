const express = require('express');

const router = express.Router();

const Patient = require('../models/patient.model');

router.route('/').get((req, res) =>{
      Patient.find()
             .then(patient => res.json(patient))
             .catch(error => res.status(400).json('Error ' + error))
});

// add patient
router.route('/add').post((req, res) =>{
  const username = req.body.username;
  const email = req.body.email;
  const mobile = req.body.mobile;
  const message = req.body.message;

  const newPatient = new Patient({username, email, mobile, message});
  newPatient.save()
            .then(() => res.json('Patient added!!'))
            .catch(error => res.status(400).json('Error ' + error))
});

// get specific patient
router.route('/:id').get((req, res) =>{
    Patient.findById(req.params.id)
           .then(patient => res.json(patient))
           .catch(error => res.status(400).json('Error ' + error))
});


// delete patient
router.route('/:id').delete((req, res) =>{
       Patient.findByIdAndDelete(req.params.id)
              .then(res => res.json('Patient deleted!!'))
              .catch(error => res.status(400).json('Error ' + error))
});

// update patient details

router.route('patient/:id').post((req, res) =>{
  Patient.findById(req.params.body)
         .then(patient => {
           patient.username = req.body.username
           patient.email = req.body.email
           patient.mobile = req.body.mobile
           patient.message = req.body.message

           patient.save()
                  .then(() => res.json('Patient added!!'))
                  .catch(error => res.status(400).json('Error ' + error))
         })
         .catch(error => res.status(400).json('Error: ' + error))


});

module.exports = router;