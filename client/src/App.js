import { useEffect } from "react";
import "./App.css";

function App() {
  //axios.get("http://localhost:3000/profile/").then((res) => res.json);
  // const getAccessToken = (req, res) => {
  //   //const { access_token } = URLSearchParams;
  //   fetch("http://localhost:3001/spotify/v1/profile").then((res) => res.json);
  //   //console.log(access_token);
  // };
  // useEffect(() => {
  //   getAccessToken();
  // }, []);

  return (
    <div className="App">
      <h1>Success! You are logged in</h1>
    </div>
  );
}

export default App;
