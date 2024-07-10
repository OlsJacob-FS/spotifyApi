const express = require("express");
const router = express.Router();

const AuthController = require("../controllers/auth");

router.post("/");
router.post("/login", AuthController.login);
router.post("/callback", AuthController.callback);
router.post("/search");
