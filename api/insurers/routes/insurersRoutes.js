const express = require("express");
const Insurers = require("../models/insurersModels");

const router = express.Router();

router.get("/", (req, res) => {
  Insurers.getInsurers()
    .then(insurers => {
      res.status(200).json(insurers);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get("/:id", (req, res) => {
  Insurers.getInsurersBy({ id: req.params.id })
    .then(insurer => {
      res.status(200).json(insurer);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get("/:id/coverages", (req, res) => {
  Insurers.getInsurersCoverages(req.params.id)
    .then(coverages => {
      res.status(200).json(coverages);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
