const express = require('express')
const router = express.Router();

const Doctor = require('../models/doctor.model');

router.route('/doctor').get((req, res) =>{
    Doctor.find()
          .then(doctor => res.json(doctor))
          .catch((error) => res.status(400).json('Error ' + error));
});

module.exports = router;



