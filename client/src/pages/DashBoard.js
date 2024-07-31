import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/card/Card";

export default function DashBoard() {
  const [data, setData] = useState([]);
  const [profile, setProfile] = useState([]);

  async function getProfile() {
    const response = await axios.get(
      "http://localhost:3001/spotify/v1/profile"
    );
    const data = await response.data;
    await setProfile([data]);
  }
  useEffect(() => {
    getProfile();
  }, []);
  console.log(profile);

  async function getAlbums() {
    const response = await axios.get("http://localhost:3001/spotify/v1/albums");
    const data = await response.data;
    await setData([data]);
  }

  return (
    <div>
      <h1>Welcome {profile[0]?.display_name}!</h1>
      {/* <img src={profile?.images[0].url} alt="" /> */}
      {data?.map((album, i) => (
        <Card
          key={i}
          img={album.images[0].url}
          title={album.name}
          artist={album.artists[0].name}
        />
      ))}
      <button onClick={getAlbums}>Get Albums</button>
    </div>
  );
}
