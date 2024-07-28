const express = require("express");
const app = express();

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const redirect_uri = process.env.REDIRECT_URI;
const secret_key = process.env.SECRET_KEY;

function fetchAccessToken(req, res, next) {
  const code = req.query.code || null;
  var authOptions = {
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
        new Buffer.from(client_id + ":" + client_secret).toString("base64"),
    },
    json: true,
  };

  const { data } =
    (authOptions.url,
    authOptions.form,
    {
      headers: authOptions.headers,
    });
  //const access_token = data.access_token;
  //console.log("Access Token: ", access_token);

  next();
}

module.exports = {
  fetchAccessToken,
};
