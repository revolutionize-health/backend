const express = require("express");

const Procedures = require("../models/proceduresModels");
const {
  checkInsertRequirements
} = require("../middleware/proceduresMiddleware");

const router = express.Router();

router.get("/", (req, res) => {
  Procedures.getProcedures()
    .then(procedures => {
      if (procedures.length) {
        res.status(200).json(procedures);
      } else {
        res.status(404).json({ message: "no procedures in our database" });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
});

router.get("/:id", (req, res) => {
  Procedures.getProceduresById(req.params.id)
    .then(procedure => {
      if (procedure) {
        res.status(200).json(procedure);
      } else {
        res.status(404).json({ message: "no procedure with that id" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get("/:id/coverages", (req, res) => {
  Procedures.getProceduresCoverages(req.params.id)
    .then(data => {
      if (data.procedure) {
        if (data.coverages.length) {
          res.status(200).json(data);
        } else {
          res
            .status(404)
            .json({ message: "no coverages on record for this prcedure" });
        }
      } else {
        res.status(404).json({ message: "no procedure with that id" });
      }
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

router.put("/:id", checkInsertRequirements, (req, res) => {
  Procedures.updateProcedure(req.params.id, req.body)
    .then(changedProcedure => {
      if (changedProcedure) {
        res.status(200).json(changedProcedure);
      } else {
        res.status(404).json({ message: "no procedure with that id" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.delete("/:id", (req, res) => {
  Procedures.deleteProcedure(req.params.id)
    .then(deletedInfo => {
      if (deletedInfo) {
        res.status(200).json({ message: "procedure successfully deleted" });
      } else {
        res.status(404).json({ message: "no procedure with that id" });
      }
    })
    .catch(error => {
      console.log(error)
      res.status(500).json(error);
    });
});

module.exports = router;
