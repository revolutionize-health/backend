const express = require("express");

const Procedures = require("../models/proceduresModels");
const {
  checkInsertRequirements
} = require("../middleware/proceduresMiddleware");

const router = express.Router();

router.get("/", (req, res) => {
  Procedures.getProcedures()
    .then(procedures => {
      res.status(200).json(procedures);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get("/:id", (req, res) => {
  Procedures.getProceduresBy({ id: req.params.id })
    .then(procedure => {
      res.status(200).json(procedure);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get("/:id/coverages", (req, res) => {
  Procedures.getProceduresCoverages(req.params.id)
    .then(coverages => {
      res.status(200).json(coverages);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/", checkInsertRequirements, (req, res) => {
  Procedures.addProcedure(req.body)
    .then(newProcedure => {
      res.status(201).json(newProcedure);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
