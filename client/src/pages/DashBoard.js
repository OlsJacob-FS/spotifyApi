import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/card/CoverCard";
import Navbar from "../components/navbar/Navbar";
import "./Pages.css";

export default function DashBoard() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [profile, setProfile] = useState([]);

  async function getProfile() {
    try {
      const response = await axios.get(
        "http://localhost:3001/spotify/v1/profile"
      );
      const profileData = await response.data;
      await setProfile([profileData]);
    } catch (error) {
      console.log("profile error", error);
    }
  }

  useEffect(() => {
    getProfile();
  }, []);

  async function getAlbum() {
    try {
      const response = await axios.get(
        "http://localhost:3001/spotify/v1/albums",
        {
          params: {
            q: search,
          },
        }
      );

      const artistData = await response.data?.artists.items;

      await setData(artistData);
      console.log("this is data", data);
    } catch (error) {
      console.log("This is error", error);
    }
  }

  useEffect(() => {
    if (search) {
      getAlbum();
    }
  }, [search]);

  return (
    <div>
      <Navbar
        name={profile[0]?.display_name}
        image={profile[0]?.images[0].url}
      />
      <form>
        <input
          type="text"
          placeholder="Search Artist"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="inputField"
        />
      </form>

      <div className="cardDiv">
        {data?.map((data) => (
          <Card key={data?.id} img={data?.images[0]?.url} title={data?.name} />
        ))}
      </div>
    </div>
  );
}
