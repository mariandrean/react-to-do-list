import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import About from "../pages/About/About.jsx"
import Contact from "../pages/Contact/Contact.jsx"

function AppRoutes() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default AppRoutes;
