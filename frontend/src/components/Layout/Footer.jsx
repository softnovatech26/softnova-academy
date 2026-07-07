import { MdEmail } from "react-icons/md";
import React from "react";
import { FaFacebookF, FaTwitter, FaWhatsapp, FaInstagram, FaLinkedinIn, FaGlobeAsia } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative text-white pt-20 pb-10 overflow-hidden bg-slate-950 border border-white/10 shadow-[0_0_40px_-15px_rgba(255,45,45,0.15)] backdrop-blur-md">
      {/* Background Red Glow (Right Side) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/90 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="w-[90%] max-w-[1200px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-12 relative z-10">

        {/* Logo Section */}
        <div className="space-y-4">
          <Link to="/" className="flex items-center gap-3 group inline-flex transition-all duration-300 hover:opacity-90">
            <img src="/softnovalogo (2).jpeg" alt="Logo" className="w-8 h-8 rounded-full object-cover transition-transform duration-500 group-hover:rotate-[360deg]" />
            <h2 className="text-[20px] font-bold transition-colors duration-300">
              SoftNova<span className="text-[#ff2d2d]"> Academy</span>
            </h2>
          </Link>
          <p className="text-[#a0a0a0] text-[15px] leading-relaxed">
            We provide practical, skill-based training to build industry-ready software development skills.
          </p>
          
          {/* Social Icons with Premium Pop-up Effect */}
          <div className="flex gap-4 pt-2">
            <a
              href="https://www.facebook.com/softnova.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 border border-[#333] rounded-full flex items-center justify-center bg-red-700 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-110 hover:bg-[#ff2d2d] hover:border-[#ff2d2d] hover:shadow-[0_0_15px_rgba(255,45,45,0.6)]"
            >
              <FaFacebookF size={14} className="text-white" />
            </a>

            <a
              href="https://chat.whatsapp.com/K35VGX7gqWcHnsL51lWIlN"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 border border-[#333] rounded-full flex items-center justify-center bg-red-700 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-110 hover:bg-[#ff2d2d] hover:border-[#ff2d2d] hover:shadow-[0_0_15px_rgba(255,45,45,0.6)]"
            >
              <FaWhatsapp size={14} className="text-white" />
            </a>

            <a
              href="https://www.instagram.com/softnova.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 border border-[#333] rounded-full flex items-center justify-center bg-red-700 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-110 hover:bg-[#ff2d2d] hover:border-[#ff2d2d] hover:shadow-[0_0_15px_rgba(255,45,45,0.6)]"
            >
              <FaInstagram size={14} className="text-white" />
            </a>

            <a
              href="https://www.linkedin.com/company/soft-nova-tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 border border-[#333] rounded-full flex items-center justify-center bg-red-700 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-110 hover:bg-[#ff2d2d] hover:border-[#ff2d2d] hover:shadow-[0_0_15px_rgba(255,45,45,0.6)]"
            >
              <FaLinkedinIn size={14} className="text-white" />
            </a>

            <a
              href="https://x.com/SoftNova94"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 border border-[#333] rounded-full flex items-center justify-center bg-red-700 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-110 hover:bg-[#ff2d2d] hover:border-[#ff2d2d] hover:shadow-[0_0_15px_rgba(255,45,45,0.6)]"
            >
              <FaTwitter size={14} className="text-white" />
            </a>
          </div>
        </div>

        {/* Explore - Modern Sliding Links */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Explore</h3>
          <ul className="space-y-4 text-[#a0a0a0] text-[15px]">
            <li>
              <Link
                to="/courses"
                className="block transition-all duration-300 ease-out hover:text-[#ff2d2d] hover:translate-x-2"
              >
                Course
              </Link>
            </li>
            <li>
              <Link
                to="/trainers"
                className="block transition-all duration-300 ease-out hover:text-[#ff2d2d] hover:translate-x-2"
              >
                Trainer
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block transition-all duration-300 ease-out hover:text-[#ff2d2d] hover:translate-x-2"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="block transition-all duration-300 ease-out hover:text-[#ff2d2d] hover:translate-x-2"
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>

        {/* Courses - Sliding Links with React Router */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Courses</h3>
          <ul className="space-y-4 text-[#a0a0a0] text-[15px]">
            <li>
              <Link to="/courses" className="block transition-all duration-300 ease-out hover:text-[#ff2d2d] hover:translate-x-2">
                Web Development
              </Link>
            </li>
            <li>
              <Link to="/courses" className="block transition-all duration-300 ease-out hover:text-[#ff2d2d] hover:translate-x-2">
                Mobile App Development
              </Link>
            </li>
            <li>
              <Link to="/courses" className="block transition-all duration-300 ease-out hover:text-[#ff2d2d] hover:translate-x-2">
                Artificial Intelligence
              </Link>
            </li>
            <li>
              <Link to="/courses" className="block transition-all duration-300 ease-out hover:text-[#ff2d2d] hover:translate-x-2">
                Python Programming
              </Link>
            </li>
            <li>
              <Link to="/courses" className="block transition-all duration-300 ease-out hover:text-[#ff2d2d] hover:translate-x-2">
                Graphic Design
              </Link>
            </li>
            <li>
              <Link to="/courses" className="block transition-all duration-300 ease-out hover:text-[#ff2d2d] hover:translate-x-2">
                UI / UX Design
              </Link>
            </li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
          <div>
            <a 
              href="mailto:softnovaacademy.pk@gmail.com" 
              className="flex items-center gap-[10px] text-[#a0a0a0] mb-[15px] text-[15px] md:justify-start justify-center transition-colors duration-300 hover:text-[#ff2d2d]"
            >
              <MdEmail className="transition-transform duration-300 group-hover:scale-110" />
              softnovaacademy.pk@gmail.com
            </a>

            <p className="flex items-center gap-[10px] text-[#a0a0a0] mb-[15px] text-[15px] md:justify-start justify-center">
              <FaGlobeAsia />
              Pakistan · Learn from Anywhere
            </p>
          </div>
          
          {/* Advanced Glow Button */}
          <button className="mt-[10px] bg-[#ef2b2d] text-white border-none py-[10px] px-[20px] rounded-full text-[15px] cursor-pointer transition-all duration-300 ease-out hover:bg-white hover:text-[#ef2b2d] hover:scale-105 hover:shadow-[0_0_20px_rgba(239,43,45,0.4)]">
            Register Now
          </button>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="w-[90%] max-w-[1200px] mx-auto border-t border-white/5 mt-16 pt-8 text-center text-[#666] text-[14px]">
        <p className="my-[6px] text-[#ccc] text-[15px]">
          © 2026 <strong className="text-white">SoftNova Academy.</strong> All Rights Reserved.
        </p>
        <p className="my-[6px] text-[15px]">
          Designed with ❤️ by SoftNova Academy Team
        </p>
      </div>
    </footer>
  );
};

export default Footer;