import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Loginpage from "./Pages/login.js";
import EmergencyPage from './Pages/EmergencyPage';
import Help from "./Pages/Help";
import PingIncidents from "./Pages/PingIncidents";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
           <Route path="/login-page" element={<Loginpage />} />
           <Route path="/emergency-page" element={<EmergencyPage/>} />
           <Route path="/ping-incidents" element={<PingIncidents/>} />
           <Route path="/emergency-contacts" element={<Help/>} />
           
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
