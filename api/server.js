//Dependencies
const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
//Use Express
const app = express();

//Port & Database
const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL;
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));
//mongoose connection:
mongoose.connect(DATABASE_URL, { useNewUrlParser: true });
// App.use/ app.listen
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
