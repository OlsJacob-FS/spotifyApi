const express = require("express");
const router = express.Router();

const fetchAccessToken = require("../middleware/jwt");
const authController = require("../controllers/authController");
const spotifyController = require("../controllers/spotifyController");
const { redirect } = require("express/lib/response");

// app.use(fetchAccessToken);

router.get("/login", authController.login);
router.get("/callback", authController.callback);
router.get("/refresh", authController.refresh);
router.get("/albums", fetchAccessToken, spotifyController.searchAlbums);
router.get("/profile", fetchAccessToken, spotifyController.fetchProfile);

module.exports = router;
