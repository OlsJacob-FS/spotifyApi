const jwt = require("jsonwebtoken");
const WebToken = require("../models/WebToken");
require("dotenv").config();

module.exports = {
  jwtAuth,
};
