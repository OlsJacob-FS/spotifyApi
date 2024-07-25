import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";

export default function DashBoard() {
  const [profile, setProfile] = useState(null);
  async function getProfile(req, res) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const paramValue = urlParams.get("access_token");
    const accessToken = paramValue.toString();
    console.log("this is access Toke::", accessToken);
    //console.log(accessToken);
    //  / let accessToken = localStorage.getItem("access_token");

    const response = await fetch("https://api.spotify.com/v1/me?", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const data = await response.json();
    console.log(data);
    setProfile(data);
  }

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
      <h1>Welcome back {profile.display_name}</h1>
    </div>
  );
}
