const express = require("express");
const Coverages = require("../models/coveragesModel");

const router = express.Router();

router.get("/", (req, res) => {
  Coverages.getCoverages()
    .then(coverages => {
      res.status(200).json(coverages);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get("/:id", (req, res) => {
  Coverages.getCoveragesBy({ id: req.params.id })
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

module.exports = router;
