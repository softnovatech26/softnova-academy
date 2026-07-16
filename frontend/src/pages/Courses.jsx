import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../data/courses";

function Courses() {

  return (

    <main className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">


      {/* Background effect */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-500/60 via-transparent to-transparent pointer-events-none" />



      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">



        {/* Heading */}

        <div
          className="text-center mb-16"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >

          <h1
            className="text-5xl md:text-6xl font-bold text-white mb-4"
            data-aos="fade-down"
          >
            All <span className="text-red-500">Courses</span>
          </h1>


          <p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Master industry-leading skills with our comprehensive course collection
          </p>


        </div>





        {/* Courses Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


          {courses.map((course,index)=>(


            <Link
              key={course.id}
              to={`/courses/${course.slug}`}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="group bg-gray-900/50 backdrop-blur border border-gray-800 rounded-2xl overflow-hidden hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20 flex flex-col h-full text-decoration-none"
            >


              {/* Image */}

              <div
                className="relative h-48 overflow-hidden bg-gray-800"
                data-aos="zoom-in"
              >

                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />


                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />


              </div>





              {/* Content */}

              <div
                className="p-6 flex flex-col flex-1"
                data-aos="fade-up"
                data-aos-delay="200"
              >


                <div className="flex-1">


                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors">
                    {course.title}
                  </h3>




                  <div className="mb-4">

                    <p className="text-gray-400 text-sm mb-2">
                      Instructor
                    </p>


                    <p className="text-white font-bold text-lg">
                      {course.trainer}
                    </p>


                  </div>





                  <div className="flex justify-between text-sm text-gray-400 mb-4">

                    <span>
                      {course.level}
                    </span>


                    <span>
                      {course.duration}
                    </span>


                  </div>



                </div>





                {/* Enroll Button */}

                <button
                  data-aos="zoom-in"
                  data-aos-delay="300"
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-500/50 hover:scale-105 cursor-pointer"
                >
                  Enroll Now
                </button>



              </div>


            </Link>


          ))}


        </div>


      </div>


    </main>

  );

}


export default Courses;