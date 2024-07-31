async function fetchAlbums(req, res) {
  const token = req.access_token;
  //await console.log("Token:::", token);
  const result = await fetch(
    "https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy",
    {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  const data = await result.json();
  console.log("this is data", { data });
  res.json(data && data);
}

async function fetchProfile(req, res) {
  const token = req.access_token;
  //await console.log("Token:::", token);
  const result = await fetch("https://api.spotify.com/v1/me", {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await result.json();
  console.log("this is data", { data });
  res.json(data && data);
}

module.exports = {
  fetchAlbums,
  fetchProfile,
};
