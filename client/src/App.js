import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Navbar from "./components/navbar/Navbar";
import DashBoard from "./pages/DashBoard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Routes>
          <Route path="/dashboard" exact element={<DashBoard />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/" exact element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
