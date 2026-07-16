import Marquee from "react-fast-marquee";
import React from "react";

import class6 from "../assets/images/class 6.jpeg";
import haseeb from "../assets/images/haseeb .jpeg";
import khadeeja from "../assets/images/khadeja.jpg";
import Hira from "../assets/images/Hira.jpg";
import Seema from "../assets/images/Seema.jpg";
import iqra from "../assets/images/Iqra.jpeg";
import Aree from "../assets/images/Areeba.jpg";

import ourMission from "../assets/images/our mission.avif";
import ourVision from "../assets/images/our vission.webp";
function About() {

  const teamMembers = [
    {
      name: "Haseeb UL Hassan",
      role: "Founder & CEO",
      image: haseeb,
    },
    {
      name: "Khadeeja Zafer",
      role: "HR & Marketing Manager",
      image: khadeeja,
    },
    {
      name: "Areeba",
      role: "Web Team Leader",
      image: Aree,
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
      name: "Iqra Bano",
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

        <div
          className="text-center mb-16"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >

          <h1
            className="text-3xl font-bold text-red-500 mb-4"
            data-aos="fade-down"
            data-aos-duration="1200"
          >
            About Us
          </h1>


          <h2
            className="text-2xl font-bold text-white mb-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Building the Future with SoftNova Academy
          </h2>


          <h3
            className="text-4xl font-bold"
            data-aos="zoom-in"
            data-aos-delay="400"
          >

            <span className="text-white">
              Making world-class learning{" "}
            </span>

            <span className="text-red-500">
              accessible
            </span>

          </h3>

        </div>





        {/* About Content */}

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24"
          data-aos="fade-up"
        >


          <div 
            data-aos="fade-right"
            data-aos-duration="1500"
          >

            <img
              src={class6}
              alt="SoftNova Academy"
              className="w-full h-[450px] object-cover rounded-2xl shadow-lg hover:scale-105 transition duration-500"
            />

          </div>




          <div
            className="text-gray-300 text-lg leading-8 space-y-6"
          >


            <p
              data-aos="fade-up"
              data-aos-delay="200"
            >
              SoftNova Academy is a modern technology and learning platform
              dedicated to empowering students with industry-relevant skills
              and knowledge required to succeed in today's digital world.
              We focus on quality education, practical training, and
              innovative learning approaches.
            </p>


            <p
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Our academy provides hands-on experience in software development,
              web technologies, artificial intelligence, and emerging digital
              skills through real-world projects and professional guidance.
              We believe students learn best when they build, experiment,
              and solve real industry problems.
            </p>


            <p
              data-aos="fade-up"
              data-aos-delay="600"
            >
              At SoftNova Academy, our goal is to transform passionate learners
              into confident technology professionals by creating a supportive
              environment where creativity, innovation, and continuous growth
              become the foundation of success.
            </p>


          </div>


        </div>


           {/* Team Section */}

        <div
          className="text-center mb-12"
          data-aos="zoom-in"
          data-aos-duration="1200"
        >

          <h2
            className="text-4xl font-bold text-white"
            data-aos="fade-down"
          >
            Meet Our <span className="text-red-500">Great Team</span>
          </h2>


          <p
            className="text-gray-400 mt-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            A passionate team working together to create better learning
            opportunities and technology solutions.
          </p>

        </div>





        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
        >


          <Marquee
            speed={70}
            pauseOnHover={true}
            gradient={false}
            className="py-4"
          >


            {teamMembers.map((member,index)=>(

              <div
                key={index}
                className="w-80 mx-4 bg-[#111] rounded-2xl overflow-hidden shadow-lg hover:-translate-y-3 hover:shadow-red-500/30 transition duration-500"
              >

                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover object-top"
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


          </Marquee>


        </div>





        {/* Mission */}

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-24"
          data-aos="fade-up"
          data-aos-duration="1800"
        >


          <div
            data-aos="fade-right"
            data-aos-duration="1500"
          >

            <h2
              className="text-4xl font-bold text-white mb-6"
              data-aos="zoom-in"
            >
              Our <span className="text-red-500">Mission</span>
            </h2>


            <p
              className="text-gray-300 text-lg leading-8"
              data-aos="fade-up"
              data-aos-delay="300"
            >

              Our mission is to empower students with practical skills,
              modern technology knowledge, and industry-focused training
              that prepares them for successful careers in software
              development and the digital world.

              We aim to create a learning environment where students can
              grow, innovate, and achieve their professional goals with
              confidence through practical experience and continuous learning.

            </p>


          </div>





          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
          >

            <img
              src={ourMission}
              alt="Our Mission"
              className="w-full h-[420px] object-cover rounded-2xl shadow-lg hover:scale-105 transition duration-500"
            />

          </div>


        </div>








        {/* Vision */}

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-24"
          data-aos="fade-up"
          data-aos-duration="1800"
        >


          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
          >

            <img
              src={ourVision}
              alt="Our Vision"
              className="w-full h-[420px] object-cover rounded-2xl shadow-lg hover:scale-105 transition duration-500"
            />

          </div>





          <div
            data-aos="fade-left"
            data-aos-duration="1500"
          >

            <h2
              className="text-4xl font-bold text-white mb-6"
              data-aos="zoom-in"
            >
              Our <span className="text-red-500">Vision</span>
            </h2>


            <p
              className="text-gray-300 text-lg leading-8"
              data-aos="fade-up"
              data-aos-delay="300"
            >

              Our vision is to become a leading technology education platform
              that inspires students through quality education, innovative
              teaching methods, and practical learning experiences.

              We aim to build future-ready professionals who can contribute
              positively to the global technology industry and create
              meaningful digital solutions.

            </p>


          </div>


        </div>



      </div>


    </main>

  );
}


export default About;