const bcrypt = require("bcryptjs");

module.exports = {
  checkCredentials,
  hashPassword
};

function checkCredentials(req, res, next) {
  const credentials = req.body;
  if (credentials.email && credentials.password) {
    next();
  } else {
    res.status(403).json("required fields were not provided");
  }
}

function hashPassword(req, res, next) {
  req.body.password = bcrypt.hashSync(
    req.body.password,
    process.env.HASH_SYNC || 5
  );

  next();
}
