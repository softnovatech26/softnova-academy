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
    // <footer className="footer">
    //   {/* Top Wave */}
    //   <div className="footer-wave"></div>

    //   <div className="footer-container">
    //     {/* Left Section */}
    //     <div className="footer-column">
    //       <div className="footer-logo">
    //         <img src="./public/SoftNova Logo1-06.png" alt="SoftNova Academy Logo" />

    //         <div>
    //           <h2 className="footer-title">
    //             SoftNova <span>Academy</span>
    //           </h2>
    //         </div>
    //       </div>

    //       <p className="footer-description">
    //         SoftNova Academy empowers students with industry-focused training in
    //         Web Development, Mobile App Development, Artificial Intelligence,
    //         UI/UX Design, and other cutting-edge technologies. We prepare future
    //         professionals through practical learning and real-world projects.
    //       </p>

    //       <div className="social-icons">
    //         <a href="#">
    //           <FaFacebookF />
    //         </a>

    //         <a href="#">
    //           <FaWhatsapp />
    //         </a>

    //         <a href="#">
    //           <FaTwitter />
    //         </a>

    //         <a href="#">
    //           <FaLinkedinIn />
    //         </a>

    //         <a href="#">
    //           <FaGithub />
    //         </a>
    //       </div>
    //     </div>

    //     {/* Courses */}
    //     <div className="footer-column">
    //       <h3>Courses</h3>

    //       <ul>
    //         <li>Web Development</li>
    //         <li>Mobile App Development</li>
    //         <li>Artificial Intelligence</li>
    //         <li>Python Programming</li>
    //         <li>Graphic Design</li>
    //         <li>UI / UX Design</li>
    //       </ul>
    //     </div>

    //     {/* Company */}
    //     <div className="footer-column">
    //       <h3>Company</h3>

    //       <ul>
    //         <li>Home</li>
    //         <li>About Us</li>
    //         <li>Courses</li>
    //         <li>Our Trainers</li>
    //         <li>Gallery</li>
    //         <li>Contact</li>
    //       </ul>
    //     </div>

    //     {/* Contact */}
    //     <div className="footer-column">
    //       <h3>Get in Touch</h3>

    //       <div className="contact-info">
    //         <p>
    //           <MdEmail />
    //           softnovaacademy.pk@gmail.com
    //         </p>

    //         <p>
    //           <FaGlobeAsia />
    //           Pakistan · Learn from Anywhere
    //         </p>
    //       </div>

    //       <button className="contact-btn">
    //         Register Now
    //       </button>
    //     </div>
    //   </div>

    //   {/* Bottom */}
    //   <div className="footer-bottom">
    //     <p>
    //       © 2026 <strong>SoftNova Academy.</strong> All Rights Reserved.
    //     </p>

    //     <p className="designer">
    //       Designed with ❤️ by SoftNova Academy
    //     </p>
    //   </div>
    // </footer>



<>
    <footer className="bg-black text-white relative mt-20 overflow-hidden">

  {/* Top Wave */}
  <div className="h-[90px] bg-gradient-to-b from-red-600 to-red-800 [clip-path:ellipse(80%_100%_at_50%_0%)]"></div>

  <div className="w-[90%] max-w-[1300px] mx-auto py-[60px] grid lg:grid-cols-[2fr_1fr_1fr_1.3fr] md:grid-cols-2 grid-cols-1 gap-[60px] md:gap-10">

    {/* Left Section */}
    <div>
      <div className="flex items-center gap-[15px] mb-[25px] md:justify-start justify-center">

        <img
          src="/softnovalogo(2).png"
          alt="SoftNova Academy Logo"
          className="w-[65px]"
        />

        <div>
          <h2 className="text-[42px] font-bold m-0">
            SoftNova <span className="block text-[#ff2d2d]">Academy</span>
          </h2>
        </div>
      </div>

      <p className="text-[#c9c9c9] leading-[1.8] text-[17px] mb-[30px] md:text-left text-center">
        SoftNova Academy empowers students with industry-focused training in
        Web Development, Mobile App Development, Artificial Intelligence,
        UI/UX Design, and other cutting-edge technologies. We prepare future
        professionals through practical learning and real-world projects.
      </p>

      <div className="flex gap-4 md:justify-start justify-center">

        <a href="#" className="w-12 h-12 rounded-full bg-[#ef2b2d] flex justify-center items-center text-white text-[20px] transition-all duration-300 hover:bg-white hover:text-[#ef2b2d] hover:-translate-y-[5px]">
          <FaFacebookF />
        </a>

        <a href="#" className="w-12 h-12 rounded-full bg-[#ef2b2d] flex justify-center items-center text-white text-[20px] transition-all duration-300 hover:bg-white hover:text-[#ef2b2d] hover:-translate-y-[5px]">
          <FaWhatsapp />
        </a>

        <a
          href="#"
          className="w-12 h-12 rounded-full bg-[#ef2b2d] flex justify-center items-center text-white text-[20px] transition-all duration-300 hover:bg-white hover:text-[#ef2b2d] hover:-translate-y-[5px]"
        >
          <FaTwitter />
        </a>

        <a
          href="#"
          className="w-12 h-12 rounded-full bg-[#ef2b2d] flex justify-center items-center text-white text-[20px] transition-all duration-300 hover:bg-white hover:text-[#ef2b2d] hover:-translate-y-[5px]"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="#"
          className="w-12 h-12 rounded-full bg-[#ef2b2d] flex justify-center items-center text-white text-[20px] transition-all duration-300 hover:bg-white hover:text-[#ef2b2d] hover:-translate-y-[5px]"
        >
          <FaGithub />
        </a>

      </div>
    </div>

    {/* Courses */}
    <div className="text-center md:text-left">
      <h3 className="text-[#ff3b3b] text-[28px] mb-[25px] md:mt-0 mt-5">
        Courses
      </h3>

      <ul className="list-none p-0">
        <li className="mb-[18px] text-[#ddd] cursor-pointer transition-all duration-300 text-[17px] hover:text-[#ff3b3b] hover:pl-2">Web Development</li>
        <li className="mb-[18px] text-[#ddd] cursor-pointer transition-all duration-300 text-[17px] hover:text-[#ff3b3b] hover:pl-2">Mobile App Development</li>
        <li className="mb-[18px] text-[#ddd] cursor-pointer transition-all duration-300 text-[17px] hover:text-[#ff3b3b] hover:pl-2">Artificial Intelligence</li>
        <li className="mb-[18px] text-[#ddd] cursor-pointer transition-all duration-300 text-[17px] hover:text-[#ff3b3b] hover:pl-2">Python Programming</li>
        <li className="mb-[18px] text-[#ddd] cursor-pointer transition-all duration-300 text-[17px] hover:text-[#ff3b3b] hover:pl-2">Graphic Design</li>
        <li className="mb-[18px] text-[#ddd] cursor-pointer transition-all duration-300 text-[17px] hover:text-[#ff3b3b] hover:pl-2">UI / UX Design</li>
      </ul>
    </div>

    {/* Company */}
    <div className="text-center md:text-left">
      <h3 className="text-[#ff3b3b] text-[28px] mb-[25px] md:mt-0 mt-5">
        Company
      </h3>

      <ul className="list-none p-0">
        <li className="mb-[18px] text-[#ddd] cursor-pointer transition-all duration-300 text-[17px] hover:text-[#ff3b3b] hover:pl-2">Home</li>
        <li className="mb-[18px] text-[#ddd] cursor-pointer transition-all duration-300 text-[17px] hover:text-[#ff3b3b] hover:pl-2">About Us</li>
        <li className="mb-[18px] text-[#ddd] cursor-pointer transition-all duration-300 text-[17px] hover:text-[#ff3b3b] hover:pl-2">Courses</li>
        <li className="mb-[18px] text-[#ddd] cursor-pointer transition-all duration-300 text-[17px] hover:text-[#ff3b3b] hover:pl-2">Our Trainers</li>
        <li className="mb-[18px] text-[#ddd] cursor-pointer transition-all duration-300 text-[17px] hover:text-[#ff3b3b] hover:pl-2">Gallery</li>
        <li className="mb-[18px] text-[#ddd] cursor-pointer transition-all duration-300 text-[17px] hover:text-[#ff3b3b] hover:pl-2">Contact</li>
      </ul>
    </div>

    {/* Contact */}
    <div className="text-center md:text-left">
      <h3 className="text-[#ff3b3b] text-[28px] mb-[25px] md:mt-0 mt-5">
        Get in Touch
      </h3>

      <div>
        <p className="flex items-center gap-[10px] text-[#ddd] mb-[18px] text-[17px] md:justify-start justify-center">
          <MdEmail />
          softnovaacademy.pk@gmail.com
        </p>

        <p className="flex items-center gap-[10px] text-[#ddd] mb-[18px] text-[17px] md:justify-start justify-center">
          <FaGlobeAsia />
          Pakistan · Learn from Anywhere
        </p>
      </div>

      <button className="mt-[15px] bg-[#ef2b2d] text-white border-none py-[14px] px-[35px] rounded-full text-[17px] cursor-pointer transition-all duration-300 hover:bg-white hover:text-[#ef2b2d]">
        Register Now
      </button>
    </div>

  </div>

  {/* Bottom */}
  <div className="border-t border-[#222] text-center py-[25px] px-[10px]">
    <p className="my-[6px] text-[#ccc] text-[15px]">
      © 2026 <strong className="text-white">SoftNova Academy.</strong> All Rights Reserved.
    </p>

    <p className="text-[#ff4b4b] my-[6px] text-[15px]">
      Designed with ❤️ by SoftNova Academy
    </p>
  </div>

</footer>
</>

  );
};

export default Footer;