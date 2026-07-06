
import { MdEmail } from "react-icons/md";


import React from "react";
import { FaFacebookF, FaTwitter, FaWhatsapp, FaInstagram, FaGithub, FaLinkedinIn, FaYoutube, FaGlobeAsia } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#140707] text-white pt-20 pb-10 overflow-hidden">
      {/* Background Red Glow (Right Side) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/90 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="w-[90%] max-w-[1200px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-12 relative z-10">

        {/* Logo Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img src="/softnovalogo (2).jpeg" alt="Logo" className="w-8 h-8 rounded-full object-cover" />
            <h2 className="text-[20px] font-bold">SoftNova<span className="text-[#ff2d2d]"> Academy</span></h2>
          </div>
          <p className="text-[#a0a0a0] text-[15px] leading-relaxed">
            We provide practicle, skill-based training to build industry-ready software development skills.
          </p>
          <div className="flex gap-4 pt-2">
            <a
              href="https://www.facebook.com/softnova.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 border border-[#333] rounded-full flex items-center justify-center bg-red-700 hover:bg-[#ff2d2d] hover:border-[#ff2d2d] transition-all"
            >
              <FaFacebookF size={14} />
            </a>

            <a
              href="https://chat.whatsapp.com/K35VGX7gqWcHnsL51lWIlN"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 border border-[#333] rounded-full flex items-center justify-center bg-red-700 hover:bg-[#ff2d2d] hover:border-[#ff2d2d] transition-all"
            >
              <FaWhatsapp size={14} />
            </a>

            <a
              href="https://www.instagram.com/softnova.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 border border-[#333] rounded-full flex items-center justify-center bg-red-700 hover:bg-[#ff2d2d] hover:border-[#ff2d2d] transition-all"
            >
              <FaInstagram size={14} />
            </a>

            <a
              href="https://www.linkedin.com/company/soft-nova-tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 border border-[#333] rounded-full flex items-center justify-center bg-red-700 hover:bg-[#ff2d2d] hover:border-[#ff2d2d] transition-all"
            >
              <FaLinkedinIn size={14} />
            </a>

            <a
              href="https://x.com/SoftNova94"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 border border-[#333] rounded-full flex items-center justify-center bg-red-700 hover:bg-[#ff2d2d] hover:border-[#ff2d2d] transition-all"
            >
              <FaTwitter size={14} />
            </a>
          </div>

        </div>

        {/* Explore */}
        <div>
          <h3 className="text-lg font-semibold mb-6"> Courses</h3>
          <ul className="space-y-4 text-[#a0a0a0] text-[15px]">
            <li className="hover:text-[#ff2d2d] cursor-pointer">Web Development</li>
            <li className="hover:text-[#ff2d2d] cursor-pointer">Mobile App Development</li>
            <li className="hover:text-[#ff2d2d] cursor-pointer">Artificial Intelligence</li>
            <li className="hover:text-[#ff2d2d] cursor-pointer">Python Programming</li>
            <li className="hover:text-[#ff2d2d] cursor-pointer">Graphic Design</li>
            <li className="hover:text-[#ff2d2d] cursor-pointer">UI / UX Design</li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Company</h3>
          <ul className="space-y-4 text-[#a0a0a0] text-[15px]">
            <li className="hover:text-[#ff2d2d] cursor-pointer">Home</li>
            <li className="hover:text-[#ff2d2d] cursor-pointer">Design</li>
            <li className="hover:text-[#ff2d2d] cursor-pointer">Data Science</li>
            <li className="hover:text-[#ff2d2d] cursor-pointer">Marketing</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>


          <div>
            <p className="flex items-center gap-[10px] text-[#a0a0a0] mb-[15px] text-[15px] md:justify-start justify-center">
              <MdEmail />
              softnovaacademy.pk@gmail.com
            </p>

            <p className="flex items-center gap-[10px] text-[#a0a0a0] mb-[15px] text-[15px] md:justify-start justify-center">
              <FaGlobeAsia />
              Pakistan · Learn from Anywhere
            </p>
          </div>
          <button className="mt-[10px] bg-[#ef2b2d] text-white border-none py-[10px] px-[20px] rounded-full text-[15px] cursor-pointer transition-all duration-300 hover:bg-white hover:text-[#ef2b2d]">
            Register Now
          </button>

        </div>
      </div>

      {/* Bottom Footer */}

      <div className="w-[90%] max-w-[1200px] mx-auto border-t border-[#1a1a1a] mt-16 pt-8 text-center text-[#666] text-[14px]">
        <p className="my-[6px] text-[#ccc] text-[15px]">
          © 2026 <strong className="text-white">SoftNova Academy.</strong> All Rights Reserved.
        </p>

        <p className=" my-[6px] text-[15px]">
          Designed with ❤️ by SoftNova Academy
        </p>
      </div>

    </footer>
  );
};

export default Footer;
