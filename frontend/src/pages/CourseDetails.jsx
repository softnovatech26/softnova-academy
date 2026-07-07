import React from "react";
import { Link, useParams } from "react-router-dom";
import { getCourseBySlug } from "../data/courses";

function CourseDetails() {
  const { slug } = useParams();
  const course = getCourseBySlug(slug);

  if (!course) {
    return (
      <main className="min-h-screen bg-[#0a0a0a] relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-500/60 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Course not found</h1>
          <Link to="/courses" className="inline-block bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">
            Back to Courses
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] relative overflow-hidden py-16">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-500/60 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Back Button */}
        <Link to="/courses" className="inline-flex items-center text-red-500 hover:text-red-400 font-semibold mb-8 transition-colors">
          ← Back to Courses
        </Link>

        {/* Course Details Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left: Course Image */}
          <div className="flex flex-col">
            <div className="relative h-96 rounded-2xl overflow-hidden bg-gray-800 border border-gray-800 shadow-2xl shadow-red-500/20">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </div>

          {/* Right: Course Info */}
          <div className="flex flex-col justify-start">
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {course.title}
            </h1>

            {/* Trainer */}
            <div className="mb-8">
              <p className="text-gray-400 text-sm mb-2 font-semibold">INSTRUCTOR</p>
              <p className="text-2xl font-bold text-red-500">
                {course.trainer}
              </p>
            </div>

            {/* Course Meta */}
            <div className="grid grid-cols-2 gap-6 mb-8 py-6 border-t border-b border-gray-800">
              <div>
                <p className="text-gray-400 text-sm mb-2 font-semibold">LEVEL</p>
                <p className="text-white text-lg font-bold">
                  {course.level}
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2 font-semibold">DURATION</p>
                <p className="text-white text-lg font-bold">
                  {course.duration}
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-12">
              <p className="text-gray-400 text-sm mb-3 font-semibold">ABOUT THIS COURSE</p>
              <p className="text-gray-300 text-lg leading-relaxed">
                {course.description}
              </p>
            </div>

            {/* Enroll Button */}
            <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-500/50 hover:scale-105 cursor-pointer">
              Enroll Now
            </button>

            {/* Additional Info */}
            <p className="text-gray-400 text-sm text-center mt-4">
              Get lifetime access • Learn at your own pace • Certificate on completion
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CourseDetails;
