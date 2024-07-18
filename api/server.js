//Dependencies
const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");

const cors = require("cors");

//routes
const spotifyRoute = require("./routes/auth");

//Use Express
const app = express();
app.use(cors());
app.use("/spotify/v1", spotifyRoute);
//Port
const PORT = process.env.PORT || 3001;

//Database:
connectDB();
// App.use/ app.listen
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
