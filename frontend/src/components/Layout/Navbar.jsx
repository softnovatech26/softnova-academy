import React from "react";
import { Link } from "react-router-dom";
import { ChevronDown, BookOpen } from "lucide-react";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-gray-900 shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 no-underline"
        >
          <img
            src="/SoftNova Logo1-06.png"
            alt="SoftNova Academy"
            className="h-14 w-14 object-contain"
          />

          <h2 className="whitespace-nowrap text-2xl font-bold text-white lg:text-3xl">
            SoftNova{" "}
            <span className="text-red-500">
              Academy
            </span>
          </h2>
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex flex-wrap items-center justify-center gap-8">
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
                className="flex items-center gap-1 font-medium text-white transition hover:text-red-500"
              >
                Courses
                <ChevronDown size={16} />
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

        {/* Register Button */}
        <button
          className="flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-red-700"
        >
          <BookOpen size={18} />
          Register
        </button>

      </div>
    </header>
  );
}

export default Navbar;