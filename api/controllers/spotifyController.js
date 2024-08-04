const querystring = require("querystring");

async function searchAlbums(req, res) {
  const token = req.access_token;
  const { q } = req.query;
  const type = "artist";
  try {
    const result = await fetch(
      `https://api.spotify.com/v1/search?` +
        querystring.stringify({
          q,
          type,
        }),
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await result.json();

    res.json(data && data);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function fetchProfile(req, res) {
  const token = req.access_token;
  try {
    const result = await fetch("https://api.spotify.com/v1/me", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await result.json();
    console.log("this is Profile", { data });
    res.json(data && data);
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  searchAlbums,
  fetchProfile,
};
