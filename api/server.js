//Dependencies
const express = require("express");
require("dotenv").config();

//routes
const spotifyRoute = require("./routes/spotify");

//Use Express
const app = express();
app.use("/spotify/v1", spotifyRoute);
//Port
const PORT = process.env.PORT || 3001;

// App.use/ app.listen
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
