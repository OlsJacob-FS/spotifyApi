const express = require("express");
const app = express();
const router = express.Router();
const jwt = require("jwt-simple");
const WebToken = require("../models/WebToken");
const authController = require("../controllers/authController");
const spotifyController = require("../controllers/spotifyController");

const secret_key = process.env.SECRET_KEY;
app.use(jwtAuth);

router.get("/login", authController.login);
router.get("/callback", authController.callback);
router.get("/refresh", authController.refresh);
router.get("/profile", jwtAuth, spotifyController.fetchAlbums);
router.post("/search");

async function jwtAuth(req, res, next) {
  const token = await WebToken.find({});
  const access = token[0].token;
  //const access_token = access && access.split(" ");

  //console.log("Token::::", token[0].token);
  // if (!token) return res.status(401).json({ error: "Access denied" });
  const decoded = jwt.decode(access, secret_key);
  //console.log("this is decode", decoded);
  const access_token = decoded.access_token;
  console.log(access_token);
  // if (!webToken) {
  //   return res.status(401).json({ error: "Access denied" });
  // }
  res.send(access_token);
  next(access_token);
}
module.exports = router;
