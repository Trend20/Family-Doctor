const express = require('express')
const router = express.Router();

const Doctor = require('../models/doctor.model');

router.route('/').get((req, res) =>{
    Doctor.find()
          .then(doctors => res.json(doctors))
          .catch((error) => res.status(400).json('Error ' + error));
});

module.exports = router;



