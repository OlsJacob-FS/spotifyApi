const mongoose = require("mongoose");

const jwtSchema = new mongoose.Schema({
  //jwt token schema
});

module.exports = mongoose.model("JWT", jwtSchema);
