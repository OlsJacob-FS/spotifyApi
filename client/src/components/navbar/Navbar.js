import React from "react";
import spotifyImg from "../../images/Spotify_Logo.png";
import Styles from "./nav.css";
export default function Navbar() {
  return (
    <div>
      <div className="nav">
        <nav>
          <img src={spotifyImg} alt="" />
          <h1>Spotify</h1>
        </nav>
      </div>
    </div>
  );
}
