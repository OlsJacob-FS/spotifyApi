const jwt = require("jsonwebtoken");
const WebToken = require("../models/WebToken");
require("dotenv").config();

const secret_key = process.env.SECRET_KEY;

const jwtAuth = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ error: "Access denied" });

  try {
    const decoded = jwt.decode(token, secret_key);
    const webToken = await WebToken.find({});
    if (!webToken) {
      return res.status(401).json({ error: "Access denied" });
    }
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
  next();
};

module.exports = {
  jwtAuth,
};
