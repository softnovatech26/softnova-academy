import React from "react";
import "./Navbar.css";

import {
  Search,
  ChevronDown,
  User,
  BookOpen,
} from "lucide-react";

function Navbar() {
  return (
    <header className="navbar">

        <div className="navbar-container">

            <div className="logo-gradient">

                 <div className="logo-section">

                    <img
                      src="/SoftNova Logo1-06.png"
                     alt="SoftNova Academy"
                      className="logo"
                    />

                    <div className="logo-text">
                    <h2>SoftNova</h2>
                    <span>Academy</span>
                 </div>

            </div>

        </div>

        {/* Search */}

        <div className="search-box">

          <Search size={18} className="search-icon" />

          <input
            type="text"
            placeholder="Search courses, instructors, technologies..."
          />

        </div>

        {/* Navigation */}

        <ul className="nav-links">

          <li>
            <a href="/">Home</a>
          </li>

          <li>
            <a href="/">
              Courses
              <ChevronDown size={16} />
            </a>
          </li>

          <li>
            <a href="/">Trainers</a>
          </li>

          <li>
            <a href="/">Projects</a>
          </li>

          <li>
            <a href="/">About</a>
          </li>

          <li>
            <a href="/">Contact</a>
          </li>

        </ul>

        {/* Buttons */}

        <div className="nav-buttons">

          <button className="login-btn">

            <User size={18} />

            Login

          </button>

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