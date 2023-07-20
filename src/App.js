import "./App.css";

import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import Doctor from "./components/pages/doctor/Doctor";
import Locate from "./components/pages/locate/locate";
import Intro from "./components/pages/intro/Intro";
import Mfa from "./components/pages/mfa/mfa";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {sessionStorage.getItem("user") != null &&
        sessionStorage.getItem("user") != "null" ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/" element={<Intro />} />
        )}

        <Route path="/login" element={<Login />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/locate" element={<Locate />} />
        <Route path="/register" element={<Register />} />
        <Route path="/authenticate" element={<Mfa />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
