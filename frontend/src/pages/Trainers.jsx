import React from "react";
import Bhavish from "../assets/images/Bhavish .webp";
import areeba from "../assets/images/Areeba.webp";
import Sammad from "../assets/images/sammad.webp";
import Samreen from "../assets/images/samreen .jpeg";

// BOOM charc foce push

const trainersData = [
  { id: 1, name: "Bhavish Kumar", role: "AI & React instructor", image: Bhavish, description: "2+ years AI and React development experience.", courses: 2, students: 300 },
  { id: 2, name: "Areeba Siddique", role: "React Native Instructor", image: areeba, description: "3+ years of experience in mobile app development with React Native.", courses: 1, students: 400 },
  { id: 3, name: "Sammad UL Hassan", role: "React JS instructor", image: Sammad, description: "1+ years of experience in web development with React JS.", courses: 1, students: 80 },
  { id: 4, name: "Samreen", role: "Instructor", image: Samreen, description: "Scaled 3 startups from zero to Series B.", courses: 5, students: 22000 },
  { id: 5, name: "Emily Johnson", role: "Full Stack Developer", image: "/teacher5.jfif", description: "Expert in MERN stack and building scalable web applications.", courses: 10, students: 35000 },
  { id: 6, name: "Michael Anderson", role: "Python & AI Trainer", image: "/teacher6.jfif", description: "AI specialist teaching Python, ML, and real-world projects.", courses: 9, students: 29000 },
  { id: 7, name: "Sophia Williams", role: "Cloud Engineer", image: "/teacher7.jfif", description: "Cloud expert helping students master modern technologies.", courses: 7, students: 27000 },
  { id: 8, name: "James Wilson", role: "Backend Engineer", image: "/teacher8.jfif", description: "Backend specialist focused on APIs and databases.", courses: 11, students: 39000 },
];

function Trainers() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a0a] py-14 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-500/60 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div
          className="mb-12 text-center sm:mb-16"
          data-aos="zoom-in"
          data-aos-duration="700"
        >
          <h2
            className="text-3xl font-bold text-white sm:text-4xl md:text-5xl"
            data-aos="fade-down"
            data-aos-duration="600"
          >
            Our <span className="text-red-500">trainers</span>
          </h2>

          <p
            className="mt-5 text-sm leading-8 text-gray-400 sm:text-base"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"
          >
            Learn from practitioners at top companies — not academics teaching theory.
          </p>
        </div>

        {/* Intro */}
        <div
          className="mb-10 text-center"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <h1
            className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500"
            data-aos="fade-down"
            data-aos-duration="500"
          >
            Meet the instructors
          </h1>

          <p
            className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl"
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-duration="600"
          >
            Learn from working professionals
          </p>

          <p
            className="mt-4 text-sm leading-8 text-gray-300 sm:text-base"
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="600"
          >
            Practitioners at top companies who teach what they actually ship.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {trainersData.map((trainer, index) => (
            <div
              key={trainer.id}
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={index * 80}
              className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-gray-900/50 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-red-500/40"
            >
              <div className="relative h-56 overflow-hidden bg-gray-800 sm:h-60">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 transition duration-300 group-hover:bg-black/10" />
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-red-500 sm:text-xl">
                  {trainer.name}
                </h3>

                <p className="mt-1 text-sm font-semibold text-red-400">
                  {trainer.role}
                </p>

                <p className="mt-4 text-sm leading-7 text-gray-400">
                  {trainer.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-sm text-gray-400">
                  <span>{trainer.courses} courses</span>
                  <span>{trainer.students.toLocaleString()} students</span>
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