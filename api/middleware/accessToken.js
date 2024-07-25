const getAccessToken = (req, res, next) => {
  const { access_token } = req.header(access_token);
  if (!access_token) {
    res.send(401).json({ error: "access Denied" });
  }
  res.send(access_token);
};

module.exports = {
  getAccessToken,
};
