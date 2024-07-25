function getAccessToken(req, res, next) {
  let code = req.query.code || null;
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

  const { data } = axios.post(authOptions.url, authOptions.form, {
    headers: authOptions.headers,
  });
  req.access_token = data.access_token;

  next();
}

module.exports = {
  getAccessToken,
};
