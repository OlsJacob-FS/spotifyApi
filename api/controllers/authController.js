const querystring = require("querystring");
const axios = require("axios");
const jwt = require("jwt-simple");

require("dotenv").config();
const WebToken = require("../models/WebToken");

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const redirect_uri = process.env.REDIRECT_URI;
const secret_key = process.env.SECRET_KEY;

exports.login = (req, res, next) => {
  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: client_id,
        scope: "user-read-private user-read-email",
        redirect_uri: redirect_uri,
      })
  );
};
//Callback route
//AFTER AUTH REDIRECT TO HTTP://localhost:3000
//Access code / access_token
exports.callback = async (req, res) => {
  // fetch spotify token to get access token
  let code = req.query.code || null;
  console.log("code::", code);
  const authOptions = {
    url: "https://accounts.spotify.com/api/token",
    method: "POST",
    form: {
      code: code,
      redirect_uri: redirect_uri,
      grant_type: "authorization_code",
    },
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(client_id + ":" + client_secret).toString("base64"),
    },
    json: true,
  };

  const { data } = await axios.post(authOptions.url, authOptions.form, {
    headers: authOptions.headers,
  });
  console.log("This is data>>", data);
  //console.log("Access Token: ", data);
  const payload = { access_token: data.access_token };
  //console.log("this is payload", payload);
  const token = jwt.encode(payload, secret_key);

  const webToken = await WebToken.find({});

  if (webToken) {
    await WebToken.deleteMany({ data: { $exists: false } });
    //create token here
    const newToken = await new WebToken({
      token: token,
    });
    await newToken.save();
  }
  res.redirect(
    "http://localhost:3000/dashboard?" +
      querystring.stringify({
        access_token: data.access_token,
      })
  );
};

exports.refresh = (req, res) => {
  const refresh_token = data.refresh_token;
  const authOptions = {
    url: "https://accounts.spotify.com/api/token",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        new Buffer.from(client_id + ":" + client_secret).toString("base64"),
    },
    form: {
      grant_type: "refresh_token",
      refresh_token: refresh_token,
    },
    json: true,
  };

  axios.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      let access_token = body.access_token,
        refresh_token = body.refresh_token;
      res.send({
        access_token: access_token,
        refresh_token: refresh_token,
      });
    }
  });
};
