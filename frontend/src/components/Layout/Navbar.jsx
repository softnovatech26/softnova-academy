import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Search } from "lucide-react";
import { courses } from "../../data/courses";

function Navbar() {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
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
    closeTimerRef.current = window.setTimeout(() => setIsCoursesOpen(false), 220);
  };

  useEffect(() => () => clearCloseTimer(), []);

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

            <li
              className="relative"
              onMouseEnter={openCoursesMenu}
              onMouseLeave={closeCoursesMenu}
            >
              <button
                type="button"
                onClick={() => setIsCoursesOpen((prev) => !prev)}
                className="flex items-center gap-1 font-medium text-white transition hover:text-red-500"
              >
                Courses
                <ChevronDown size={16} />
              </button>

              {isCoursesOpen && (
                <div
                  className="absolute left-0 top-full mt-3 min-w-[220px] rounded-xl border border-white/10 bg-gray-800 p-2 shadow-xl"
                  onMouseEnter={openCoursesMenu}
                  onMouseLeave={closeCoursesMenu}
                >
                  {courses.map((course) => (
                    <Link
                      key={course.slug}
                      to={`/courses/${course.slug}`}
                      className="block rounded-lg px-3 py-2 text-sm text-gray-200 transition hover:bg-red-600 hover:text-white"
                      onClick={() => setIsCoursesOpen(false)}
                    >
                      {course.title}
                    </Link>
                  ))}
                </div>
              )}
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

        {/* Search Bar */}
        <div className="flex items-center rounded-full bg-white/10 px-3 py-2 text-white backdrop-blur-sm">
          <Search size={16} className="mr-2 text-red-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-24 bg-transparent text-sm outline-none placeholder:text-gray-300 sm:w-32"
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;