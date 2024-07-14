const querystring = require("querystring");
require("dotenv").config();

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const redirect_uri = process.env.REDIRECT_URI;

exports.login = (req, res) => {
  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: client_id,
        scope: "user-read-private user-read-email",
        redirect_uri: redirect_uri,
      })
  );
  console.log(redirect_uri);
};
//Callback route
//AFTER AUTH REDIRECT TO HTTP://localhost:3000
//Access code / access_token / state
exports.callback = (req, res) => {
  let code = req.query.code || null;
  console.log("this is code", code);
  // fetch spotify token to get access token
  const authOptions = {
    method: "POST",
    form: {
      code: code,
      redirect_uri: redirect_uri,
    },
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",

      Authorization:
        "Basic " +
        Buffer.from(client_id + ":" + client_secret).toString("base64"),
    },
    body: `code=${code}&redirect_uri=${redirect_uri}&grant_type=authorization_code`,
    json: true,
  };
  //fetch api token
  fetch("https://accounts.spotify.com/api/token", authOptions).then(
    (response) => {
      if (response.status === 200) {
        response.json().then((data) => {
          let access_token = data.access_token;
          let refresh_token = data.refresh_token;
          //if token is valid redirect to localhost 3000
          res.redirect(
            "http://localhost:3000/" +
              querystring.stringify({
                access_token: access_token,
                refresh_token: refresh_token,
              })
          );
          console.log("This is access_Token", access_token);
        });
      } else {
        //if token is invalid :: error
        res.redirect(
          "/#" +
            querystring.stringify({
              error: "invalid_token",
            })
        );
      }
    }
  );
};
