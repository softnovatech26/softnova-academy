import Marquee from "react-fast-marquee";
import React from "react";
import class6 from "../assets/images/class 6.jpeg";
import haseeb from "../assets/images/haseeb .jpeg";
import khadeeja from "../assets/images/khadeja.jpg";
import Hira from "../assets/images/Hira.jpg";
import Seema from "../assets/images/Seema.jpg";
import iqra from "../assets/images/Iqra.jpg";
import Aree from "../assets/images/Areeba.jpg";
import ourMission from "../assets/images/our mission.avif";
import ourVision from "../assets/images/our vission.jpg";

function About() {
  const teamMembers = [
    { name: "Haseeb UL Hassan", role: "Founder & CEO", image: haseeb },
    { name: "Khadeeja Zafar", role: "HR & Marketing Manager", image: khadeeja },
    { name: "Areeba Siddique", role: "Web Team Leader", image: Aree },
    { name: "Hira Rajput", role: "Marketing Executive", image: Hira },
    { name: "Seema Sibyani", role: "Marketing Executive", image: Seema },
    { name: "Iqra Bano", role: "Marketing Executive", image: iqra },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a0a]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-600/50 via-transparent to-transparent" />
      <div className="relative z-10 mx-auto max-w-7xl px-3 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mb-12 text-center sm:mb-16" data-aos="zoom-in" data-aos-duration="1500">
          <h1 className="mb-4 text-2xl font-bold text-red-500 sm:text-3xl lg:text-4xl" data-aos="fade-down" data-aos-duration="1200">About Us</h1>
          <h2 className="mb-3 text-xl font-bold text-white sm:text-2xl lg:text-3xl" data-aos="fade-up" data-aos-delay="200">Building the future with SoftNova Academy</h2>
          <h3 className="text-2xl font-bold sm:text-3xl lg:text-4xl" data-aos="zoom-in" data-aos-delay="400">
            <span className="text-white">Making world-class learning </span>
            <span className="text-red-500">accessible</span>
          </h3>
        </div>

        <div className="mb-16 grid items-center gap-8 lg:grid-cols-2 lg:gap-12" data-aos="fade-up">
          <div data-aos="fade-right" data-aos-duration="1500">
            <img src={class6} alt="SoftNova Academy community" className="h-[220px] w-full rounded-[1.5rem] object-cover shadow-lg sm:h-[280px] md:h-[320px] lg:h-[420px]" />
          </div>
          <div className="space-y-5 text-sm leading-8 text-gray-300 sm:text-base lg:text-lg">
            <p data-aos="fade-up" data-aos-delay="200">SoftNova Academy is a modern technology and learning platform dedicated to empowering students with industry-relevant skills and knowledge required to succeed in today’s digital world.</p>
            <p data-aos="fade-up" data-aos-delay="400">Our academy provides hands-on experience in software development, web technologies, artificial intelligence, and emerging digital skills through real-world projects and professional guidance.</p>
            <p data-aos="fade-up" data-aos-delay="600">At SoftNova Academy, our goal is to transform passionate learners into confident technology professionals by creating a supportive environment where creativity, innovation, and continuous growth become the foundation of success.</p>
          </div>
        </div>

        <div className="mb-12 text-center" data-aos="zoom-in" data-aos-duration="1200">
          <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl" data-aos="fade-down">Meet our <span className="text-red-500">great team</span></h2>
          <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base" data-aos="fade-up" data-aos-delay="200">A passionate team working together to create better learning opportunities and technology solutions.</p>
        </div>

        <div data-aos="zoom-in" data-aos-duration="1500">
          <Marquee speed={70} pauseOnHover gradient={false} className="overflow-hidden py-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="mx-2 w-[85vw] max-w-[18rem] overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#111111] shadow-lg sm:mx-3 sm:w-72 sm:max-w-none lg:w-80">
                <img src={member.image} alt={member.name} className="h-72 w-full object-cover object-top sm:h-80" />
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-white sm:text-xl">{member.name}</h3>
                  <p className="mt-2 text-sm text-red-500">{member.role}</p>
                </div>
              </div>
            ))}
          </Marquee>
        </div>

        <div className="mt-16 grid items-center gap-8 lg:grid-cols-2 lg:gap-12" data-aos="fade-up" data-aos-duration="1800">
          <div data-aos="fade-right" data-aos-duration="1500">
            <h2 className="mb-6 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">Our <span className="text-red-500">mission</span></h2>
            <p className="text-sm leading-8 text-gray-300 sm:text-base lg:text-lg" data-aos="fade-up" data-aos-delay="300">Our mission is to empower students with practical skills, modern technology knowledge, and industry-focused training that prepares them for successful careers in software development and the digital world.</p>
          </div>
          <div data-aos="zoom-in" data-aos-duration="1500">
            <img src={ourMission} alt="Our Mission" className="h-[220px] w-full rounded-[1.5rem] object-cover shadow-lg sm:h-[280px] md:h-[320px] lg:h-[420px]" />
          </div>
        </div>

        <div className="mt-16 grid items-center gap-8 lg:grid-cols-2 lg:gap-12" data-aos="fade-up" data-aos-duration="1800">
          <div data-aos="zoom-in" data-aos-duration="1500">
            <img src={ourVision} alt="Our Vision" className="h-[220px] w-full rounded-[1.5rem] object-cover shadow-lg sm:h-[280px] md:h-[320px] lg:h-[420px]" />
          </div>
          <div data-aos="fade-left" data-aos-duration="1500">
            <h2 className="mb-6 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">Our <span className="text-red-500">vision</span></h2>
            <p className="text-sm leading-8 text-gray-300 sm:text-base lg:text-lg" data-aos="fade-up" data-aos-delay="300">Our vision is to become a leading technology education platform that inspires students through quality education, innovative teaching methods, and practical learning experiences.</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;


 