const express = require("express");

const Insurers = require("../models/insurersModels");
const { checkInsertRequirements } = require("../middleware/insurersMiddleware");

const router = express.Router();

router.get("/", (req, res) => {
  Insurers.getInsurers()
    .then(insurers => {
      if (insurer) {
        res.status(200).json(insurers);
      } else {
        res.status(404).json({ message: "no insurer with that id" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get("/:id", (req, res) => {
  Insurers.getInsurersById(req.params.id)
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
      if (coverages.coverages.length) {
        res.status(200).json(coverages);
      } else {
        res
          .status(404)
          .json({ message: "no coverages on record for this insurer" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/", checkInsertRequirements, (req, res) => {
  Insurers.addInsurer(req.body)
    .then(newInsurer => {
      res.status(201).json(newInsurer);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.put("/:id", checkInsertRequirements, (req, res) => {
  Insurers.updateInsurer(req.params.id, req.body)
    .then(changedInsurer => {
      res.status(200).json(changedInsurer);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.delete("/:id", (req, res) => {
  Insurers.deleteInsurer(req.params.id)
    .then(deletedInfo => {
      res.status(200).json(deletedInfo);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
