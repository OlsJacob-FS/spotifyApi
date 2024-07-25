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
});

module.exports = mongoose.model("Token", tokenSchema);
