const db = require("../../data/dbConfig");
const jwt = require("jsonwebtoken");
const jwtSecret = require("../../services/secrets").jwtSecret;

module.exports = {
  addUser,
  getUserBy,
  generateToken
};

async function addUser(user) {
  const [id] = await db("users")
    .insert(user)
    .returning("id");
  const newUser = await getUserBy({ id: id });
  return newUser;
}

async function getUserBy(param) {
  const user = await db("users")
    .where(param)
    .first();

  return user;
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
