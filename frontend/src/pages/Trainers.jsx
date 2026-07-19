import React from "react";

import Bhavish from "../assets/images/Bhavish .jpeg";
import areeba from "../assets/images/Areeba.jpg";
import Sammad from "../assets/images/sammad.jpeg";


const trainersData = [
  {
    id: 1,
    name: "Bhavish Kumar",
    role: "AI & React instructor",
    image: Bhavish,
    description: "2+ years AI and React development experience.",
    courses: 2,
    students: 300,
  },
  {
    id: 2,
    name: "Areeba Siddique",
    role: "React Native Instructor",
    image: areeba,
    description: "3+ years of experience in mobile app development with React Native.",
    courses: 1,
    students: 400,
  },
  {
    id: 3,
    name: "Sammad UL Hassan",
    role: "React JS instructor",
    image: Sammad,
    description: "1+ years of experience in web development with React JS.",
    courses: 1,
    students: 80,
  },
  {
    id: 4,
    name: "Lucas Bennett",
    role: "Growth Marketer",
    image: "/teacher4.jfif",
    description: "Scaled 3 startups from zero to Series B.",
    courses: 5,
    students: 22000,
  },
  {
    id: 5,
    name: "Emily Johnson",
    role: "Full Stack Developer",
    image: "/teacher5.jfif",
    description: "Expert in MERN stack and building scalable web applications.",
    courses: 10,
    students: 35000,
  },
  {
    id: 6,
    name: "Michael Anderson",
    role: "Python & AI Trainer",
    image: "/teacher6.jfif",
    description: "AI specialist teaching Python, ML, and real-world projects.",
    courses: 9,
    students: 29000,
  },
  {
    id: 7,
    name: "Sophia Williams",
    role: "Cloud Engineer",
    image: "/teacher7.jfif",
    description: "Cloud expert helping students master modern technologies.",
    courses: 7,
    students: 27000,
  },
  {
    id: 8,
    name: "James Wilson",
    role: "Backend Engineer",
    image: "/teacher8.jfif",
    description: "Backend specialist focused on APIs and databases.",
    courses: 11,
    students: 39000,
  },
];


function Trainers() {

  return (

    <main className="min-h-screen bg-[#0a0a0a] relative overflow-hidden py-16">


      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-500/60 via-transparent to-transparent pointer-events-none" />



      <div className="relative z-10 max-w-7xl mx-auto px-6">



        {/* Heading */}

        <div
          className="text-center mb-16"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >

          <h2
            className="text-4xl md:text-5xl font-bold text-white"
            data-aos="fade-down"
          >
            Our <span className="text-red-500">Trainers</span>
          </h2>


          <p
            className="text-gray-400 text-lg mt-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Learn from practitioners at top companies — not academics teaching theory.
          </p>


        </div>





        {/* Sub Heading */}

        <div
          className="text-center mb-12"
          data-aos="fade-up"
          data-aos-duration="1200"
        >

          <h1
            className="text-sm md:text-base font-semibold text-red-500"
            data-aos="fade-down"
          >
            Meet the instructors
          </h1>


          <p
            className="text-white text-3xl md:text-4xl font-bold tracking-tight italic mt-4"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Learn from working professionals
          </p>


          <p
            className="text-gray-300 text-lg mt-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Practitioners at top companies who teach what they actually ship.
          </p>


        </div>






        {/* Trainers Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">


          {trainersData.map((trainer,index)=>(


            <div
              key={trainer.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="group bg-gray-900/50 backdrop-blur border border-gray-800 rounded-2xl overflow-hidden hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20"
            >



              {/* Image */}

              <div
                className="relative h-56 overflow-hidden bg-gray-800"
                data-aos="zoom-in"
              >

                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />


                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />


              </div>






              {/* Content */}

              <div
                className="p-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >


                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-red-500 transition-colors">
                  {trainer.name}
                </h3>


                <p className="text-red-400 font-semibold text-sm mb-4">
                  {trainer.role}
                </p>


                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {trainer.description}
                </p>



                <div className="pt-6 border-t border-gray-800">


                  <div className="flex justify-between text-sm">


                    <p className="text-gray-400">
                      {trainer.courses} courses
                    </p>


                    <p className="text-gray-400">
                      {trainer.students.toLocaleString()} students
                    </p>


                  </div>


                </div>


              </div>


            </div>


          ))}


        </div>


      </div>


    </main>

  );

}


export default Trainers;