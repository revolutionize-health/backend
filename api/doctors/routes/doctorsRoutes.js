const express = require("express");

const Doctors = require("../models/doctorsModels");
const { checkInsertRequirements } = require("../middleware/doctorsMiddleware");

const router = express.Router();

router.get("/", (req, res) => {
  Doctors.getDoctors()
    .then(doctors => {
      if (doctors.length) {
        res.status(200).json(doctors);
      } else {
        res.status(404).json({ message: "no doctors in the database" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get("/:id", (req, res) => {
  Doctors.getDoctorsById(req.params.id)
    .then(doctor => {
      if (doctor) {
        res.status(200).json(doctor);
      } else {
        res.status(404).json({ message: "no doctor with that id" });
      }
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
      if (changedDoctor) {
        res.status(200).json(changedDoctor);
      } else {
        res.status(404).json({ message: "no doctor with that id" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.delete("/:id", (req, res) => {
  Doctors.deleteDoctor(req.params.id)
    .then(deletedInfo => {
      if (deletedInfo) {
        res.status(200).json({ message: "doctor successfully deleted" });
      } else {
        res.status(404).json({ message: "no doctor with that id" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
