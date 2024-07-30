async function fetchProfile(req, res) {
  const token = req.access_token;
  await console.log("Token:::", token);
  const result = await fetch("https://api.spotify.com/v1/me", {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });

  //console.log(result.json());
  res.send(result.json());
  //return await result.json();
}

module.exports = {
  fetchProfile,
};
