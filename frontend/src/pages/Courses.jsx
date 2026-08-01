import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../data/courses";

function Courses() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a0a]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-500/60 via-transparent to-transparent" />
      <div className="relative z-10 mx-auto max-w-7xl px-3 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mb-12 text-center sm:mb-16" data-aos="zoom-in" data-aos-duration="1500">
          <h1 className="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl" data-aos="fade-down">All <span className="text-red-500">courses</span></h1>
          <p className="mx-auto max-w-2xl text-sm leading-8 text-gray-400 sm:text-base" data-aos="fade-up" data-aos-delay="300">Master industry-leading skills with our comprehensive course collection.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <Link key={course.id} to={`/courses/${course.slug}`} data-aos="fade-up" data-aos-delay={index * 150} className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-gray-900/60 backdrop-blur transition hover:-translate-y-1 hover:border-red-500/40">
              <div className="relative h-44 overflow-hidden bg-gray-800 sm:h-48 md:h-52">
                <img src={course.image} alt={course.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/10" />
              </div>
              <div className="flex flex-1 flex-col p-4 sm:p-5 md:p-6">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white transition group-hover:text-red-500 sm:text-xl">{course.title}</h3>
                  <div className="mt-4">
                    <p className="text-sm text-gray-400">Instructor</p>
                    <p className="mt-1 text-base font-semibold text-white">{course.trainer}</p>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-sm text-gray-400">
                    <span>{course.level}</span>
                    <span>{course.duration}</span>
                  </div>
                </div>
                <button className="mt-6 w-full rounded-full bg-red-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-600">Enroll Now</button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Courses;