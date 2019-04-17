const express = require("express");

const Users = require("../models/usersModels");

const {
  checkCredentials,
  hashPassword
} = require("../../../auth/middleware/authMiddleware");

const router = express.Router();

router.get("/:id", (req, res) => {
  Users.getUserById(req.params.id)
    .then(user => {
      if (user) {
        res.status(200).json({
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email
        });
      } else {
        res.status(404).json({ message: "no user with that id" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.put("/:id", checkCredentials, hashPassword, (req, res) => {
  Users.updateUser(req.params.id, req.body)
    .then(changedUser => {
      if (changedUser) {
        res.status(200).json({
          first_name: changedUser.first_name,
          last_name: changedUser.last_name,
          email: changedUser.email
        });
      } else {
        res.status(404).json({ message: "no user with that id" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.delete("/:id", (req, res) => {
  Users.deleteUser(req.params.id)
    .then(deletedInfo => {
      if (deletedInfo) {
        res.status(200).json({ message: "user successfully deleted" });
      } else {
        res.status(404).json({ message: "no user with that id" });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
});

module.exports = router;
