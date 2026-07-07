import React from "react";
import { Link } from "react-router-dom";

function CourseCard({ course }) {
  return (
    <Link
      to={`/courses/${course.slug}`}
      className="group bg-gray-900/50 backdrop-blur border border-gray-800 rounded-2xl overflow-hidden hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20 flex flex-col h-full text-decoration-none"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gray-800">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors">
            {course.title}
          </h3>

          <div className="mb-4">
            <p className="text-gray-400 text-sm mb-2">Instructor</p>
            <p className="text-white font-bold text-lg">
              {course.trainer}
            </p>
          </div>

          <div className="flex justify-between text-sm text-gray-400 mb-4">
            <span>{course.level}</span>
            <span>{course.duration}</span>
          </div>
        </div>

        {/* Enroll Button */}
        <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-500/50 hover:scale-105 cursor-pointer">
          Enroll Now
        </button>
      </div>
    </Link>
  );
}

export default CourseCard;
