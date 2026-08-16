import React from "react";
import { MdEmail } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaGlobeAsia,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/softnova-logo.webp";

const Footer = () => {
  const socialLinks = [
    { href: "https://www.facebook.com/softnova.tech", icon: <FaFacebookF /> },
    { href: "https://chat.whatsapp.com/K35VGX7gqWcHnsL51lWIlN", icon: <FaWhatsapp /> },
    { href: "https://www.instagram.com/softnova.tech", icon: <FaInstagram /> },
    { href: "https://www.linkedin.com/company/soft-nova-tech/", icon: <FaLinkedinIn /> },
    { href: "https://x.com/SoftNova94", icon: <FaTwitter /> },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#030303] text-white">
      <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-red-600/20 blur-3xl sm:h-80 sm:w-80" />
      <div className="shell relative z-10 px-3 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div className="text-center md:text-left">
            <Link to="/" className="inline-flex items-center gap-3">
             <img
              src={Logo}
                   alt="SoftNova Academy"
                      className="h-10 w-10 rounded-full object-cover"
                          />
              <h2 className="text-xl font-semibold">
                SoftNova <span className="text-red-500">Academy</span>
              </h2>
            </Link>
            <p className="mt-4 text-sm leading-7 text-gray-400">
              Empowering learners with practical, future-ready technology skills and industry-focused training.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm text-gray-200 transition hover:-translate-y-1 hover:border-red-500/50 hover:text-red-500"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white">Explore</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li><Link to="/courses" className="transition hover:text-red-500">Courses</Link></li>
              <li><Link to="/trainers" className="transition hover:text-red-500">Trainers</Link></li>
              <li><Link to="/gallery" className="transition hover:text-red-500">Gallery</Link></li>
              <li><Link to="/about" className="transition hover:text-red-500">About</Link></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white">Get in Touch</h3>
            <div className="mt-4 space-y-3 text-sm text-gray-400">
              <a href="mailto:softnovaacademy.pk@gmail.com" className="flex items-center justify-center gap-2 transition hover:text-red-500 md:justify-start">
                <MdEmail />
                <span className="break-all">softnovaacademy.pk@gmail.com</span>
              </a>
              <p className="flex items-center justify-center gap-2 md:justify-start">
                <FaGlobeAsia />
                <span>Pakistan · Learn from Anywhere</span>
              </p>
            </div>
            <Link
              to="/contact"
              className="mt-5 inline-flex rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Register Now
            </Link>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-center text-sm text-gray-400 md:text-left">
            <h3 className="text-lg font-semibold text-white">Why learners choose us</h3>
            <ul className="mt-3 space-y-2 text-sm leading-7">
              <li>• Practical project-based coaching</li>
              <li>• Flexible online and offline sessions</li>
              <li>• Expert mentor support and career guidance</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
          <p>© 2026 SoftNova Academy. All rights reserved.</p>
          <p className="mt-2">Designed with ❤️ by SoftNova Tech Team Developers with care for a premium learning experience.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;