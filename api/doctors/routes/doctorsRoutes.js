const express = require("express");
const Doctors = require("../models/doctorsModels");

const router = express.Router();

router.get("/", (req, res) => {
  Doctors.getDoctors()
    .then(doctors => {
      res.status(200).json(doctors);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get("/:id", (req, res) => {
  Doctors.getDoctorsBy({ id: req.params.id })
    .then(doctor => {
      res.status(200).json(doctor);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
