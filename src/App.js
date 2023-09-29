import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/index_page";
import About from "./components/About/about";
import Team from "./components/Team/Team";
import Contact from "./components/Contact/Contact";
import Courses from "./components/Courses/Courses";
export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Team" element={<Team />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Courses" element={<Courses />} />
        </Routes>
      </Router>
    </>
  );
}
