const express = require("express");
const router = express.Router();
const jwt = require("jwt-simple");
const WebToken = require("../models/WebToken");
const authController = require("../controllers/authController");
const spotifyController = require("../controllers/spotifyController");

const secret_key = process.env.SECRET_KEY;
// app.use(fetchAccessToken);

router.get("/login", authController.login);
router.get("/callback", authController.callback);
router.get("/refresh", authController.refresh);
router.get("/albums", fetchAccessToken, spotifyController.fetchAlbums);
router.get("/profile", fetchAccessToken, spotifyController.fetchProfile);
router.post("/search");

async function fetchAccessToken(req, res, next) {
  // Check for token in the database
  const token = await WebToken.find({});
  //Check if there is a jwt token in the data base if there is not access denied
  if (!token) {
    return res.status(401).json({ error: "Access denied" });
  }
  if (token === "expired") {
    res.redirect("http://localhost:3000/login");
  }
  // if token is in database send access token to spotify api call
  if (token) {
    //grab token from database
    const access = token[0].token;
    //decode jwt to get access token
    const decoded = jwt.decode(access, secret_key);
    //store acces token in access_token variable and send it to spotify api endpoint
    const access_token = await decoded.access_token;
    req.access_token = access_token;
  }

  next();
}

module.exports = router;
