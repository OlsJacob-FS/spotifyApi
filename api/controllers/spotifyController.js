const axios = require("axios");
const BASE_URL = "https://api.spotify.com/v1";
const WebToken = require("../models/WebToken");
const jwt = require("jsonwebtoken");
const { useState } = require("react");

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const redirect_uri = process.env.REDIRECT_URI;
const secret_key = process.env.SECRET_KEY;

exports.fetchProfile = async (accessToken, req, res) => {
  const response = await fetch(`https://api.spotify.com/v1/tracks`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    method,
    body: JSON.stringify(body),
  });
  return await response.json();
};
