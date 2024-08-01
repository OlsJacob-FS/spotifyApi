import React from "react";
import spotifyImg from "../../images/Spotify_Logo.png";
import Styles from "./nav.css";
import SearchBarComp from "../searchBar/SearchBarComp";
export default function Navbar(props) {
  return (
    <div>
      <div className="nav">
        <nav>
          <div className="NavContainer">
            <img src={spotifyImg} alt="" />
            <h1>Spotify</h1>
          </div>
          <div className="NavContainer">
            <h4>{props.name}</h4>
            <img src={props.image} alt="" />
          </div>
        </nav>
      </div>
    </div>
  );
}
