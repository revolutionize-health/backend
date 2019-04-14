const express = require("express");
const Auth = require("../models/authModels");
const bcrypt = require("bcryptjs");
const {
  hashPassword,
  checkCredentials
} = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/registration", checkCredentials, hashPassword, (req, res) => {
  const user = req.body;
  Auth.addUser(user)
    .then(newUser => {
      const token = Auth.generateToken(newUser);
      res.status(201).json({ token: token });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/login", checkCredentials, (req, res) => {
  const { email, password } = req.body;
  Auth.getUserBy({ email: email })
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = Auth.generateToken(user);
        res.status(200).json({ token: token });
      } else {
        res.status(403).json({ message: "invalid credentials" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
