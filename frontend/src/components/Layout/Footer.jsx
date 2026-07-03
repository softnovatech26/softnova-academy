import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaWhatsapp,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGlobeAsia } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Wave */}
      <div className="footer-wave"></div>

      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-column">
          <div className="footer-logo">
            <img src="./public/SoftNova Logo1-06.png" alt="SoftNova Academy Logo" />

            <div>
              <h2 className="footer-title">
                SoftNova <span>Academy</span>
              </h2>
            </div>
          </div>

          <p className="footer-description">
            SoftNova Academy empowers students with industry-focused training in
            Web Development, Mobile App Development, Artificial Intelligence,
            UI/UX Design, and other cutting-edge technologies. We prepare future
            professionals through practical learning and real-world projects.
          </p>

          <div className="social-icons">
            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaWhatsapp />
            </a>

            <a href="#">
              <FaTwitter />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

            <a href="#">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Courses */}
        <div className="footer-column">
          <h3>Courses</h3>

          <ul>
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>Artificial Intelligence</li>
            <li>Python Programming</li>
            <li>Graphic Design</li>
            <li>UI / UX Design</li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-column">
          <h3>Company</h3>

          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Courses</li>
            <li>Our Trainers</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>Get in Touch</h3>

          <div className="contact-info">
            <p>
              <MdEmail />
              softnovaacademy.pk@gmail.com
            </p>

            <p>
              <FaGlobeAsia />
              Pakistan · Learn from Anywhere
            </p>
          </div>

          <button className="contact-btn">
            Register Now
          </button>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>
          © 2026 <strong>SoftNova Academy.</strong> All Rights Reserved.
        </p>

        <p className="designer">
          Designed with ❤️ by SoftNova Academy
        </p>
      </div>
    </footer>
  );
};

export default Footer;