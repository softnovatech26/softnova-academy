import React from "react";
import class6 from "../assets/images/class 6.jpeg";
import haseeb from "../assets/images/haseeb .jpeg";
import khadeeja from "../assets/images/khadeja .jpeg";
import Areeba from "../assets/images/Areeba.jpeg";
import Hira from "../assets/images/Hira.jpeg";
import Seema from "../assets/images/Seema.jpeg";
import iqra from "../assets/images/Iqra.jpeg";
function About() {
  const teamMembers = [
    {
      name: "Haseeb UL Hassan ",
      role: "Founder & CEO",
      image: haseeb,
    },
    {
      name: "Khadeeja Zafer ",
      role: "HR & Marketing Manager",
      image: khadeeja,
    },
    {
      name: "Areeba",
      role: "Web Team Leader",
      image: Areeba,
    },
    {
      name: "Hira Rajput",
      role: "Marketing Executive",
      image: Hira,
    },
    {
      name: "Seema Sibyani",
      role: "Marketing Executive",
      image: Seema,
    },
    {
      
      name: "Iqra Bano ",
      role: "Marketing Executive",
      image: iqra,
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-600/50 via-transparent to-transparent pointer-events-none"></div>


      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">


        {/* Heading */}
        <div className="text-center mb-16">

          <h1 className="text-3xl font-bold text-red-500 mb-4">
            About Us
          </h1>


          <h2 className="text-2xl font-bold text-white mb-3">
            Building the Future with SoftNova Academy
          </h2>


          <h3 className="text-4xl font-bold">
            <span className="text-white">
              Making world-class learning{" "}
            </span>

            <span className="text-red-500">
              accessible
            </span>
          </h3>

        </div>



        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">


          {/* Image */}
          <div>

            <img
              src={class6}
              alt="Class 6"
              className="w-full h-auto rounded-2xl shadow-lg"
            />

          </div>



          {/* Description */}
          <div className="text-gray-300 text-lg leading-8 space-y-6">


            <p>
              SoftNova Academy is a modern learning platform dedicated to
              empowering students with industry-ready skills in software
              development and digital technologies. We focus on practical
              learning, real-world projects, and hands-on experience that
              prepares students for professional careers.
            </p>


            <p>
              Our academy is built on a strong learning culture that prioritizes
              skill development, performance, and innovation. We specialize in
              teaching modern web development, programming fundamentals, and
              advanced digital solutions that help students grow in today's
              competitive tech industry.
            </p>


            <p>
              At SoftNova Academy, we combine education, innovation, and
              creativity to transform beginners into skilled professionals,
              enabling them to build impactful digital careers and succeed in
              the modern tech world.
            </p>


          </div>


        </div>




        {/* Team Section */}

        <div className="mt-24">


          <div className="text-center mb-12">


            <h2 className="text-4xl font-bold text-white">
              Meet Our{" "}
              <span className="text-red-500">
                Great Team
              </span>
            </h2>


            <p className="text-gray-400 mt-4">
              Our dedicated team is helping students build their future with technology.
            </p>


          </div>




          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


            {teamMembers.map((member, index) => (

              <div
                key={index}
                className="bg-[#111] rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300"
              >


                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-72 object-cover"
                />



                <div className="p-6 text-center">


                  <h3 className="text-xl font-bold text-white">
                    {member.name}
                  </h3>


                  <p className="text-red-500 mt-2">
                    {member.role}
                  </p>


                </div>


              </div>


            ))}


          </div>


        </div>



      </div>


    </main>
  );
}

export default About;