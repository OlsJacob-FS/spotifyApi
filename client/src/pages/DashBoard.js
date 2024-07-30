import React, { useEffect, useState } from "react";
import axios from "axios";

export default function DashBoard() {
  const [profile, setProfile] = useState(null);
  // async function getProfile(req, res) {

  const response = axios
    .get("http://localhost:3001/spotify/v1/profile")
    .then((res) => setProfile(res.data));
  console.log(profile);
  // const queryString = window.location.search;
  // const urlParams = new URLSearchParams(queryString);
  // const paramValue = urlParams.get("access_token");
  // const accessToken = paramValue.toString();
  // console.log("this is access Toke::", accessToken);
  // //console.log(accessToken);
  // //  / let accessToken = localStorage.getItem("access_token");
  // const response = await fetch("https://api.spotify.com/v1/me?", {
  //   headers: {
  //     Authorization: `Bearer ${accessToken}`,
  //   },
  // });
  // const data = await response.json();
  // console.log(data);
  //await setProfile();

  // useEffect(() => {
  //   getProfile();
  // }, []);

  return (
    <div>
      <h1>Welcome back </h1>
    </div>
  );
}
