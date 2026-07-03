import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { ChevronDown, BookOpen } from "lucide-react";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="logo-link">
  <img
    src="/SoftNova Logo1-06.png"
    alt="SoftNova Academy"
    className="logo"
  />

  <div className="logo-text">
    <h2>
      SoftNova <span>Academy</span>
    </h2>
  </div>
</Link>

        {/* Navigation */}
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/courses" className="nav-dropdown">
                Courses
                <ChevronDown size={16} />
              </Link>
            </li>

            <li>
              <Link to="/trainers">Trainers</Link>
            </li>

            <li>
              <Link to="/projects">Projects</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Register Button */}
        <div className="nav-buttons">
          <button className="register-btn">
            <BookOpen size={18} />
            Register
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;