import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/card/CoverCard";
import Navbar from "../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import "./Pages.css";

export default function DashBoard() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [profile, setProfile] = useState([]);
  const navigate = useNavigate();

  async function getProfile() {
    try {
      const response = await axios.get(
        "http://localhost:3001/spotify/v1/profile"
      );
      if (!response) {
        navigate("http://localhost:3000/login");
      } else {
        const profileData = await [response?.data];
        await setProfile(profileData);
        console.log(profile);
        if (profile.length === 0) {
          console.log("user logged out");
        }
      }
    } catch (error) {
      console.log("profile error", error);
    }
  }

  useEffect(() => {
    getProfile();
  }, []);

  async function getAlbum(req, res) {
    try {
      const response = await axios.get(
        "http://localhost:3001/spotify/v1/albums",
        {
          params: {
            q: search,
          },
        }
      );
      if (response === null) {
      } else {
        const artistData = await response.data?.artists.items;

        await setData(artistData);
        console.log("this is data", data);
      }
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
      {profile?.map(() => (
        <Navbar
          name={profile[0]?.display_name}
          image={profile[0]?.images[0].url}
        />
      ))}

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
          <Card
            key={data?.id}
            img={data?.images[0]?.url}
            title={data?.name}
            url={data?.external_urls.spotify}
          />
        ))}
      </div>
    </div>
  );
}
