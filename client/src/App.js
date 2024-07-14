import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [profile, setProfile] = useState(null);
  async function getProfile() {
    let accessToken = localStorage.getItem("access_token");

    const response = await fetch("https://api.spotify.com/v1/me", {
      headers: {
        Authorization:
          "Bearer " +
          "BQBJBb9h9n1gy8NXJlvCQadn0eH7cOOFGU-XNTvgWR91yxrK4G4VwIJzKtpIcvFuqSGwp9sm1h1pNVeQG8RkvZFlHK1bh8vjtiuBhqU9i4uiTkx8HDLRCIALe0PR48iekn5YXE1H1H0_JX83BTIEd3xlNgUKOYSzPAhRZZZt3BhNTiUb5pQSaP5T_hYeELlxew",
      },
    });
    const data = await response.json();
    console.log(data);
    setProfile({ data });
  }

  console.log("This is profile", profile);

  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div className="App">
      <h1>Spotify</h1>
      <button>Click me </button>
      <h2>{profile?.data.display_name}</h2>
      <h3>{profile?.data.email}</h3>
    </div>
  );
}

export default App;
