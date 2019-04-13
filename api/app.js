const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const AuthRouter = require("../auth/routes/authRouter");

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use("/api/auth", AuthRouter);

app.get("/", (req, res) => {
  res.status(200).json({ api: "running" });
});

module.exports = app;
