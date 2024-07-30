const axios = require("axios");
const BASE_URL = "https://api.spotify.com/v1";
const WebToken = require("../models/WebToken");
const jwt = require("jsonwebtoken");
const { useState } = require("react");

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const redirect_uri = process.env.REDIRECT_URI;
const secret_key = process.env.SECRET_KEY;

const fetchAlbums = async (access_token) => {
  try {
    const response = await fetch(
      "https://api.spotify.com/v1/search?q=Eminem&type=album",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      throw new Error("Failed to fetch data from Spotify API");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

module.exports = {
  fetchAlbums,
};
