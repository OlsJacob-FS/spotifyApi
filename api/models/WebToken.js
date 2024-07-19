const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema({
  //jwt token schema
  token: {
    type: String,
  },
  created_At: {
    type: Date,
    default: Date.now(),
  },
  expireAt: {
    type: Date,
    default: Date.now,
    expires: 3600,
  },
});

module.exports = mongoose.model("Token", tokenSchema);
