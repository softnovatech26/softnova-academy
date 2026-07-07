import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";

function Navbar() {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeTimerRef = useRef(null);

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const openCoursesMenu = () => {
    clearCloseTimer();
    setIsCoursesOpen(true);
  };

  const closeCoursesMenu = () => {
    clearCloseTimer();
    closeTimerRef.current = window.setTimeout(() => {
      setIsCoursesOpen(false);
    }, 220);
  };

  useEffect(() => {
    return () => clearCloseTimer();
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-gray-900 shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 no-underline">
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-white/10 p-1 md:h-12 md:w-12">
            <img
              src="/softnovalogo (2).jpeg"
              alt="SoftNova Academy"
              className="h-full w-full rounded-full object-cover"
            />
          </div>

          <h2 className="whitespace-nowrap text-[0.95rem] font-bold leading-none text-white sm:text-[1.7rem]">
            SoftNova <span className="text-red-500">Academy</span>
          </h2>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            <li>
              <Link
                to="/"
                className="font-medium text-white transition hover:text-red-500"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/courses"
                className="font-medium text-white transition hover:text-red-500"
              >
                Courses
              </Link>
            </li>

            <li>
              <Link
                to="/trainers"
                className="font-medium text-white transition hover:text-red-500"
              >
                Trainers
              </Link>
            </li>

            <li>
              <Link
                to="/projects"
                className="font-medium text-white transition hover:text-red-500"
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="font-medium text-white transition hover:text-red-500"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="font-medium text-white transition hover:text-red-500"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Desktop Search */}
        <div className="hidden md:flex items-center rounded-full bg-white/10 px-3 py-2 text-white backdrop-blur-sm">
          <Search size={16} className="mr-2 text-red-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-24 bg-transparent text-sm outline-none placeholder:text-gray-300 sm:w-32"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isMenuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <nav className="bg-gray-900 border-t border-white/10">
          <ul className="flex flex-col items-center gap-6 py-6">
            <li>
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="font-medium text-white transition hover:text-red-500"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/courses"
                onClick={() => setIsMenuOpen(false)}
                className="font-medium text-white transition hover:text-red-500"
              >
                Courses
              </Link>
            </li>

            <li>
              <Link
                to="/trainers"
                onClick={() => setIsMenuOpen(false)}
                className="font-medium text-white transition hover:text-red-500"
              >
                Trainers
              </Link>
            </li>

            <li>
              <Link
                to="/projects"
                onClick={() => setIsMenuOpen(false)}
                className="font-medium text-white transition hover:text-red-500"
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="font-medium text-white transition hover:text-red-500"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="font-medium text-white transition hover:text-red-500"
              >
                Contact
              </Link>
            </li>

            {/* Mobile Search */}
            <div className="flex items-center rounded-full bg-white/10 px-3 py-2 text-white backdrop-blur-sm">
              <Search size={16} className="mr-2 text-red-400" />
              <input
                type="text"
                placeholder="Search"
                className="w-36 bg-transparent text-sm outline-none placeholder:text-gray-300"
              />
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;