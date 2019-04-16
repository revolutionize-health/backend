const express = require("express");

const Hospitals = require("../models/hospitalsModel");
const {
  checkInsertRequirements
} = require("../middleware/hospitalsMiddleware");

const router = express.Router();

router.get("/", (req, res) => {
  Hospitals.getHospitals()
    .then(hospitals => {
      if (hospitals.length) {
        res.status(200).json(hospitals);
      } else {
        res.status(404).json({ message: "no hospitals in the database" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get("/:id", (req, res) => {
  Hospitals.getHospitalsById(req.params.id)
    .then(hospital => {
      if (hospital) {
        res.status(200).json(hospital);
      } else {
        res.status(404).json({ message: "no hospital with that id" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get("/:id/doctors", (req, res) => {
  Hospitals.getHospitalsDoctors(req.params.id)
    .then(data => {
      if (data.hospital) {
        if (data.doctors.length) {
          res.status(200).json(data);
        } else {
          res
            .status(404)
            .json({ message: "no doctors on record for this hospital" });
        }
      } else {
        res.status(404).json({ message: "no hospital with that id" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/", checkInsertRequirements, (req, res) => {
  Hospitals.addHospital(req.body)
    .then(newHospital => {
      res.status(201).json(newHospital);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.put("/:id", checkInsertRequirements, (req, res) => {
  Hospitals.updateHospital(req.params.id, req.body)
    .then(changedHospital => {
      if (changedHospital) {
        res.status(200).json(changedHospital);
      } else {
        res.status(404).json({ message: "no hospital with that id" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.delete("/:id", (req, res) => {
  Hospitals.deleteHospital(req.params.id)
    .then(deletedInfo => {
      if (deletedInfo) {
        res.status(200).json({ message: "hospital successfully deleted" });
      } else {
        res.status(404).json({ message: "no hospital with that id" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
