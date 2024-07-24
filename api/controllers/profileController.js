exports.fetchProfile = async (req, res) => {
  let code = req.query.code || null;
  // fetch spotify token to get access token
  const authOptions = {
    url: "https://accounts.spotify.com/api/token",
    method: "POST",
    form: {
      code: code,

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
  const token = { access_token: data.access_token };

  const result = await fetch("https://api.spotify.com/v1/me", {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });

  res.send(result.json());
};
