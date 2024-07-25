const express = require("express");
const app = express();
const router = express.Router();
//const tokenController = require("../controllers/tokenController");
const authController = require("../controllers/authController");
const spotifyController = require("../controllers/spotifyController");
//app.use(tokenController.getAccessToken());

router.get("/login", authController.login);
router.get("/callback", authController.callback);
router.get("/refresh", authController.refresh);
router.get("/profile", spotifyController.fetchProfile);
router.post("/search");

module.exports = router;

//middlewear
//passport spotify
