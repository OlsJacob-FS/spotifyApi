const jwt = require("jwt-simple");
const WebToken = require("../models/WebToken");
const secret_key = process.env.SECRET_KEY;

async function fetchAccessToken(req, res, next) {
  // Check for token in the database
  const token = await WebToken.find({});

  if (token.length === 0) {
    res.redirect("spotify/v1/login");
  }
  // if token is in database send access token to spotify api call
  else if (token.length === 1) {
    //grab token from database
    const access = token[0].token;
    //decode jwt to get access token
    const decoded = jwt.decode(access, secret_key);
    //store acces token in access_token variable and send it to spotify api endpoint
    const access_token = await decoded.access_token;
    req.access_token = access_token;
    next();
  }
  //Check if there is a jwt token in the data base if there is not access denied
}

module.exports = fetchAccessToken;
