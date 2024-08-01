import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/card/CoverCard";
import Navbar from "../components/navbar/Navbar";
import Styles from "./Pages.css";

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

  async function getAlbums() {
    const response = await axios.get("http://localhost:3001/spotify/v1/albums");
    const data = await response.data;

    await setData([data.albums.items]);
  }
  //console.log(data[0]);
  const albumData = data[0];
  console.log("This is album data", albumData);
  return (
    <div>
      <Navbar
        name={profile[0]?.display_name}
        image={profile[0]?.images[0].url}
      />

      <div className="cardDiv">
        {albumData?.map((d, i) => (
          <Card
            key={i}
            img={albumData[i].images[0].url}
            title={albumData[i].name}
            artist={albumData[i].artists[0].name}
          />
        ))}
      </div>
      <button onClick={getAlbums} className="btn">
        Get Albums
      </button>
    </div>
  );
}
