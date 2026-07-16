import { MdEmail } from "react-icons/md";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaGlobeAsia
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="relative text-white pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 overflow-hidden bg-slate-950 border border-white/10 shadow-[0_0_40px_-15px_rgba(255,45,45,0.15)] backdrop-blur-md"
      data-aos="fade-up"
      data-aos-duration="1200"
    >

      <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-red-900/90 blur-[100px] rounded-full pointer-events-none"></div>


      <div
        className="w-[92%] sm:w-[90%] max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 relative z-10"
        data-aos="zoom-in"
      >


        {/* Logo Section */}
        <div
          className="space-y-4 text-center sm:text-left"
          data-aos="fade-right"
        >

          <Link
            to="/"
            className="flex items-center gap-3 group inline-flex mx-auto sm:mx-0"
          >
            <img
              src="/softnovalogo (2).jpeg"
              alt="Logo"
              className="w-8 h-8 rounded-full object-cover group-hover:rotate-[360deg] transition duration-500"
            />

            <h2 className="text-[20px] font-bold">
              SoftNova
              <span className="text-[#ff2d2d]">
                Academy
              </span>
            </h2>

          </Link>


          <p className="text-[#a0a0a0] text-[14px] leading-relaxed">
            We provide practical, skill-based training to build
            industry-ready software development skills.
          </p>


          <div
            className="flex gap-4 pt-2 justify-center sm:justify-start"
            data-aos="zoom-in"
            data-aos-delay="300"
          >

            <a href="#" className="w-9 h-9 rounded-full bg-red-700 flex items-center justify-center hover:scale-110 transition">
              <FaFacebookF />
            </a>

            <a href="#" className="w-9 h-9 rounded-full bg-red-700 flex items-center justify-center hover:scale-110 transition">
              <FaWhatsapp />
            </a>

            <a href="#" className="w-9 h-9 rounded-full bg-red-700 flex items-center justify-center hover:scale-110 transition">
              <FaInstagram />
            </a>

            <a href="#" className="w-9 h-9 rounded-full bg-red-700 flex items-center justify-center hover:scale-110 transition">
              <FaLinkedinIn />
            </a>

            <a href="#" className="w-9 h-9 rounded-full bg-red-700 flex items-center justify-center hover:scale-110 transition">
              <FaTwitter />
            </a>

          </div>

        </div>



        {/* Explore */}

        <div
          className="text-center sm:text-left"
          data-aos="fade-up"
          data-aos-delay="200"
        >

          <h3 className="text-lg font-semibold mb-6">
            Explore
          </h3>

          <ul className="space-y-4 text-[#a0a0a0]">

            <li>
              <Link to="/courses">
                Course
              </Link>
            </li>

            <li>
              <Link to="/trainers">
                Trainer
              </Link>
            </li>

            <li>
              <Link to="/about">
                About
              </Link>
            </li>

            <li>
              <Link to="/projects">
                Projects
              </Link>
            </li>

          </ul>

        </div>
      
                  {/* Get in Touch */}

        <div
          className="text-center sm:text-left"
          data-aos="fade-left"
          data-aos-delay="600"
        >

          <h3 className="text-lg font-semibold mb-4 sm:mb-6">
            Get in Touch
          </h3>


          <div>

            <a
              href="mailto:softnovaacademy.pk@gmail.com"
              className="flex items-center gap-[10px] text-[#a0a0a0] mb-[15px] text-[14px] sm:text-[15px] justify-center sm:justify-start transition-colors duration-300 hover:text-[#ff2d2d]"
            >

              <MdEmail />

              <span className="text-[13px] sm:text-[15px] break-all">
                softnovaacademy.pk@gmail.com
              </span>

            </a>


            <p className="flex items-center gap-[10px] text-[#a0a0a0] mb-[15px] text-[14px] sm:text-[15px] justify-center sm:justify-start">

              <FaGlobeAsia />

              <span>
                Pakistan · Learn from Anywhere
              </span>

            </p>

          </div>



          <div className="flex justify-center sm:justify-start">

            <button
              className="mt-[10px] bg-[#ef2b2d] text-white py-[10px] px-[20px] rounded-full text-[14px] sm:text-[15px] transition-all duration-300 hover:bg-white hover:text-[#ef2b2d] hover:scale-105"
            >

              Register Now

            </button>

          </div>


        </div>


      </div>



      {/* Bottom Footer */}

      <div
        data-aos="fade-up"
        data-aos-delay="800"
        className="w-[92%] sm:w-[90%] max-w-[1200px] mx-auto border-t border-white/5 mt-12 sm:mt-16 pt-6 sm:pt-8 text-center text-[#666] text-[13px] sm:text-[14px]"
      >

        <p className="my-[6px] text-[#ccc] text-[13px] sm:text-[15px]">

          © 2026 
          <strong className="text-white">
            SoftNova Academy.
          </strong>

          All Rights Reserved.

        </p>


        <p className="my-[6px] text-[13px] sm:text-[15px]">

          Designed with ❤️ by SoftNova Academy Team

        </p>


      </div>
          

    </footer>
  );
};

export default Footer;