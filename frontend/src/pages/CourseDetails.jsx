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
      <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Course not found
          </h1>

          <Link
            to="/courses"
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg"
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
    <main className="min-h-screen bg-[#0a0a0a] relative overflow-hidden py-16">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-500/60 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <Link
          to="/courses"
          className="inline-flex items-center text-red-500 hover:text-red-400 font-semibold mb-8"
        >
          ← Back to Courses
        </Link>


        <h1 className="text-4xl md:text-5xl font-bold text-white mb-10">
          {course.title}
        </h1>


        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">


          {/* Sidebar */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">


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
                      className={`w-full text-left px-4 py-3 rounded-lg ${
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

          <div className="lg:col-span-3 bg-gray-900 border border-gray-800 rounded-2xl p-8">

            <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-8">
              {selectedSection?.title}
            </h2>


            <div className="space-y-4">

              {selectedSection?.content?.map((item,index)=>(

                <div
                  key={index}
                  className="flex items-start gap-4 bg-gray-800 rounded-xl p-5"
                >

                  <span className="text-red-500 text-xl font-bold">
                    ✓
                  </span>

                  <p className="text-gray-300 leading-relaxed">
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