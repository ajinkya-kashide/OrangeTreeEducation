import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm mx-5">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link className="navbar_link nav-link text-white fw-bold" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="navbar_link nav-link text-white fw-bold" to="/About">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="navbar_link nav-link text-white fw-bold" to="/Team">
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link className="navbar_link nav-link text-white fw-bold" to="/Courses">
                Courses
              </Link>
            </li>
            <li className="nav-item">
              <Link className="navbar_link nav-link text-white fw-bold" to="/Contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
