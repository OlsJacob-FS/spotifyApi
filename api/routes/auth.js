const express = require("express");
const app = express();
const router = express.Router();
const authController = require("../controllers/authController");
const spotifyController = require("../controllers/spotifyController");
const auth = require("../middleware/jwtAuth");

router.get("/login", authController.login);
router.get("/callback", authController.callback);
router.get("/refresh", authController.refresh);
router.get("/profile", auth, spotifyController.fetchProfile);
router.post("/search");

module.exports = router;
