const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profile");
const spotifyController = require("../controllers/spotifyController");

router.get("/login", spotifyController.login);
//router.get("/profile", spotifyController.getProfile);
router.get("/callback", spotifyController.callback);
router.post("/search");

module.exports = router;
