async function fetchProfile(access_token, req, res) {
  const result = await fetch("https://api.spotify.com/v1/me", {
    method: "GET",
    headers: { Authorization: `Bearer ${access_token}` },
  });
  console.log(result.json());
  res.send(result.json());
  //return await result.json();
}

module.exports = {
  fetchProfile,
};
