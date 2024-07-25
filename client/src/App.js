import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Navbar from "./components/navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>Logged in</div>
      <div>
        <a href="http://localhost:3001/spotify/v1/profile">Profile</a>
      </div>
      <div>
        <Routes>
          <Route path="/login" exact element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
