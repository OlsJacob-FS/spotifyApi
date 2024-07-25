const jwt = require("jsonwebtoken");
require("dotenv").config();

const secret_key = process.env.SECRET_KEY;

const jwtAuth = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ error: "Access denied" });
  try {
    const decoded = jwt.verify(token, secret_key);
    req.access_token = decoded.access_token;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
  next();
};

module.exports = {
  jwtAuth,
};
