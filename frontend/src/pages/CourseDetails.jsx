import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getCourseBySlug } from "../data/courses";

function CourseDetails() {
  const { slug } = useParams();
  const course = getCourseBySlug(slug);

  const [selectedModule, setSelectedModule] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);

  useEffect(() => {
    if (course?.modules?.length) {
      setSelectedModule(course.modules[0]);
      setSelectedSection(course.modules[0].outline[0]);
    } 
    else if (course?.outline?.length) {
      setSelectedSection(course.outline[0]);
    }
    else {
      setSelectedModule(null);
      setSelectedSection(null);
    }
  }, [course]);

  if (!course) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0a0a0a] px-3 py-8 sm:px-6">
        <div className="text-center">
          <h1 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Course not found
          </h1>

          <Link
            to="/courses"
            className="rounded-lg bg-red-500 px-6 py-3 font-bold text-white transition hover:bg-red-600"
          >
            Back to Courses
          </Link>
        </div>
      </main>
    );
  }


  const changeModule = (module) => {
    setSelectedModule(module);
    setSelectedSection(module.outline[0]);
  };


  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a0a] px-3 py-12 sm:px-6 sm:py-16 lg:px-8">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-500/60 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">

        <Link
          to="/courses"
          className="mb-8 inline-flex items-center font-semibold text-red-500 transition hover:text-red-400"
        >
          ← Back to Courses
        </Link>


        <h1 className="mb-10 text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
          {course.title}
        </h1>


        <div className="grid gap-6 lg:grid-cols-4 lg:gap-8">


          {/* Sidebar */}
          <div className="rounded-[1.5rem] border border-gray-800 bg-gray-900 p-4 sm:p-6">


            {/* Modules */}
            {course.modules && (
              <>
                <h2 className="text-white text-2xl font-bold mb-5">
                  Topics
                </h2>

                <div className="space-y-3 mb-8">

                  {course.modules.map((module,index)=>(
                    <button
                      key={index}
                      onClick={()=>changeModule(module)}
                      className={`w-full rounded-lg px-4 py-3 text-left text-sm sm:text-base ${
                        selectedModule?.title === module.title
                        ? "bg-red-500 text-white"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                      }`}
                    >
                      {module.title}
                    </button>
                  ))}

                </div>
              </>
            )}



            <h2 className="text-white text-2xl font-bold mb-6">
              Course Outline
            </h2>


            <div className="space-y-3">

              {(selectedModule?.outline || course.outline)?.map(
                (section,index)=>(
                  
                  <button
                    key={index}
                    onClick={()=>setSelectedSection(section)}
                    className={`w-full text-left px-4 py-3 rounded-lg ${
                      selectedSection?.title === section.title
                      ? "bg-red-500 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    {section.title}
                  </button>

                )
              )}

            </div>

          </div>




          {/* Content */}

          <div className="rounded-[1.5rem] border border-gray-800 bg-gray-900 p-4 sm:p-6 lg:col-span-3 lg:p-8">

            <h2 className="mb-8 text-2xl font-bold text-red-500 sm:text-3xl md:text-4xl">
              {selectedSection?.title}
            </h2>


            <div className="space-y-4">

              {selectedSection?.content?.map((item,index)=>(

                <div
                  key={index}
                  className="flex items-start gap-3 rounded-xl bg-gray-800 p-4 sm:gap-4 sm:p-5"
                >

                  <span className="text-red-500 text-xl font-bold">
                    ✓
                  </span>

                  <p className="break-words text-sm leading-7 text-gray-300 sm:text-base">
                    {item}
                  </p>

                </div>

              ))}

            </div>


          </div>


        </div>

      </div>

    </main>
  );
}

export default CourseDetails;