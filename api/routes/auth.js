const express = require("express");
const app = express();
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
router.get("/profile", fetchAccessToken, spotifyController.fetchProfile);
router.post("/search");

async function fetchAccessToken(req, res, next) {
  const token = await WebToken.find({});
  const access = token[0].token;

  //if (!token) return res.status(401).json({ error: "Access denied" });
  const decoded = jwt.decode(access, secret_key);

  const access_token = await decoded.access_token;
  console.log("This is access Token::", access_token);
  req.access_token = access_token;
  next();
}

module.exports = router;
