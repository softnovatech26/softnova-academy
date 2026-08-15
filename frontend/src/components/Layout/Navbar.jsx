import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/courses", label: "Courses" },
    { to: "/trainers", label: "Trainers" },
    { to: "/gallery", label: "Gallery" },
    { to: "/projects", label: "Projects" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#060606]/95 backdrop-blur-xl">
      <div className="shell flex items-center justify-between py-3 sm:py-4">
        <Link to="/" className="flex min-w-0 items-center gap-2 sm:gap-3" onClick={closeMenu}>
          <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-white/10 p-1 sm:h-12 sm:w-12">
            <img
              src="/softnova-logo.webp"
              alt="SoftNova Academy"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="min-w-0">
            <h2 className="truncate text-[0.95rem] font-bold text-white sm:text-lg lg:text-xl">
              SoftNova <span className="text-red-500">Academy</span>
            </h2>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-gray-200 transition hover:text-red-500"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/contact"
            className="hidden rounded-full bg-red-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-red-700 sm:px-4 sm:text-sm md:inline-flex"
          >
            Apply Now
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white transition hover:border-red-500/40 hover:text-red-500 md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div className={`overflow-hidden transition-all duration-300 md:hidden ${isMenuOpen ? "max-h-96" : "max-h-0"}`}>
        <nav className="border-t border-white/10 bg-[#090909]">
          <ul className="flex flex-col gap-3 px-3 py-4 sm:px-4 sm:py-5">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={closeMenu}
                  className="block rounded-xl px-3 py-2 text-sm font-medium text-gray-200 transition hover:bg-white/5 hover:text-red-500"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="inline-flex rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Apply Now
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;