const db = require("../../data/dbConfig");
const jwt = require("jsonwebtoken");
const jwtSecret = require("../../services/secrets").jwtSecret;

module.exports = {
  addUser,
  findUserBy,
  generateToken
};

async function addUser(user) {
  const users = await db("users");
//   console.log(users);
  db("users")
    .insert(user)
    // .returning("id")
    .then(([id]) => {
      console.log(id);
      findUserBy(id);
    })
    .catch(error => error);
}

function findUserBy(param) {
  return db("users")
    .where({ param })
    .first();
}

function generateToken(user) {
  const payload = {
    subject: user.id,
    email: user.email
  };

  const options = {
    expiresIn: "1hr"
  };

  return jwt.sign(payload, jwtSecret, options);
}
