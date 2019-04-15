const express = require("express");

const Doctors = require("../models/doctorsModels");
const { checkInsertRequirements } = require("../middleware/doctorsMiddleware");

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

router.post("/", checkInsertRequirements, (req, res) => {
  Doctors.addDoctor(req.body)
    .then(newDoctor => {
      res.status(201).json(newDoctor);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.put("/:id", checkInsertRequirements, (req, res) => {
  Doctors.updateDoctor(req.params.id, req.body)
    .then(changedDoctor => {
      res.status(200).json(changedDoctor);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.delete("/:id", (req, res) => {
  Doctors.deleteDoctor(req.params.id)
    .then(deletedInfo => {
      res.status(200).json(deletedInfo);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
