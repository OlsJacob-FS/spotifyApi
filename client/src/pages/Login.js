import React from "react";
import "./Pages.css";
import Navbar from "../components/navbar/Navbar";

export default function Login() {
  return (
    <div>
      <Navbar />
      <>
        <h2>Login to your Spotify Account below:</h2>
        <a href="http://localhost:3001/spotify/v1/login" className="btn">
          Login
        </a>
      </>
    </div>
  );
}
