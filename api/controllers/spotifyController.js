const axios = require("axios");
const BASE_URL = "https://api.spotify.com/v1/";

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const redirect_uri = process.env.REDIRECT_URI;

exports.fetchProfile = async (req, res) => {
  let code = req.query.code || null;
  // fetch spotify token to get access token
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
  console.log("this is code", code);

  const { data } = await axios.post(authOptions.url, authOptions.form, {
    headers: authOptions.headers,
  });
  const token = { access_token: data.access_token };
  console.log(token);
  const result = await fetch(`${BASE_URL}/me`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });

  console.log(result.json());
  //return await result.json();
};
