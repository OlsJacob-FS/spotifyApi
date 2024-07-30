import React, { useEffect, useState } from "react";
import axios from "axios";

export default function DashBoard() {
  const [profile, setProfile] = useState(null);
  async function getProfile(req, res) {
    const response = await axios
      .get("http://localhost:3001/spotify/v1/profile")
      .then((res) => setProfile(res.data));
    console.log(profile);
  }

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
      <h1>Welcome back </h1>
    </div>
  );
}
