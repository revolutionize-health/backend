const express = require("express");

const Hospitals = require("../models/hospitalsModel");
const {
  checkInsertRequirements
} = require("../middleware/hospitalsMiddleware");

const router = express.Router();

router.get("/", (req, res) => {
  Hospitals.getHospitals()
    .then(doctors => {
      res.status(200).json(doctors);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get("/:id", (req, res) => {
  Hospitals.getHospitalsBy({ id: req.params.id })
    .then(hospital => {
      res.status(200).json(hospital);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get("/:id/doctors", (req, res) => {
  Hospitals.getHospitalsDoctors(req.params.id)
    .then(doctors => {
      res.status(200).json(doctors);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/", checkInsertRequirements, (req, res) => {
  Hospitals.addHospital(req.body)
    .then(newHospital => {
      res.status(200).json(newHospital);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;