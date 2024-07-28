const express = require("express");
const app = express();
const router = express.Router();
const authController = require("../controllers/authController");
const spotifyController = require("../controllers/spotifyController");
//const fetchAccessToken = require("../middleware/accessToken");
const axios = require("axios");
const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const redirect_uri = process.env.REDIRECT_URI;
const secret_key = process.env.SECRET_KEY;
app.use(fetchAccessToken);

router.get("/login", authController.login);
router.get("/callback", authController.callback);
router.get("/refresh", authController.refresh);
router.get("/profile", fetchAccessToken, spotifyController.fetchProfile);
router.post("/search");

async function fetchAccessToken(req, res, next) {
  const code = (await req.query.code) || null;
  try {
    console.log("code::::", code);
    const authOptions = {
      url: "https://accounts.spotify.com/api/token",
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: "authorization_code",
      },
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          Buffer.from(client_id + ":" + client_secret).toString("base64"),
      },
      json: true,
    };

    const { data } = await axios.post(authOptions.url, authOptions.form, {
      headers: authOptions.headers,
    });

    const accessToken = data.access_token;
    console.log("This is access Token::", accessToken);
    next();
  } catch (error) {
    console.log("This is the problem>>", error);
  }
}

module.exports = router;
