const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const spotifyController = require("../controllers/spotifyController");

router.get("/login", authController.login);
router.get("/callback", authController.callback);
router.get("/refresh", authController.refresh);
router.get("/profile", spotifyController.fetchProfile);
router.post("/search");

module.exports = router;
