const express = require("express");

const Coverages = require("../models/coveragesModel");
const {
  checkInsertRequirements
} = require("../middleware/coveragesMiddleware");

const router = express.Router();

router.get("/", (req, res) => {
  Coverages.getCoverages()
    .then(coverages => {
      if (coverages.length) {
        res.status(200).json(coverages);
      } else {
        res.status(404).json({ message: "no coverages in the database" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get("/:id", (req, res) => {
  Coverages.getCoveragesById(req.params.id)
    .then(coverage => {
      if (coverage) {
        res.status(200).json(coverage);
      } else {
        res.status(404).json({ message: "no coverage with that id" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/", checkInsertRequirements, (req, res) => {
  Coverages.addCoverage(req.body)
    .then(newCoverage => {
      res.status(201).json(newCoverage);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.put("/:id", checkInsertRequirements, (req, res) => {
  Coverages.updateCoverage(req.params.id, req.body)
    .then(changedCoverage => {
      res.status(200).json(changedCoverage);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.delete("/:id", (req, res) => {
  Coverages.deleteCoverage(req.params.id)
    .then(deletedInfo => {
      if (deletedInfo) {
        res.status(200).json({ message: "coverage successfully deleted" });
      } else {
        res.status(404).json({ message: "no coverage with that id" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
