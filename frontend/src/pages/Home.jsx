import React, { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import card1_img from "../assets/images/card_1_img.png";
import card2_img from "../assets/images/card_2_img.jpg";
import card3_img from "../assets/images/card3.png";
import card4_img from "../assets/images/card4.png";
import First_instr from "../assets/images/first_instr.jpg";
import Second_instr from "../assets/images/second_instr.jpg";
import Third_instr from "../assets/images/third_instr.jpg";
import Fourth_instr from "../assets/images/fourth_instr.jpg";
import Community_img1 from "../assets/images/class 1.jpeg";
import Community_img2 from "../assets/images/class 2.jpeg";
import Community_img3 from "../assets/images/class 3.jpeg";
import Community_img4 from "../assets/images/class 4.jpeg";
import Community_img5 from "../assets/images/class 5.jpeg";

const courses = [
  { id: 1, name: "Complete HTML, CSS and JavaScript", trainer: "Ali Ahmmad Khan", category: "Web Development", image: card1_img },
  { id: 2, name: "Python for Data Science", trainer: "Ahmed Raza", category: "Data Science", image: card2_img },
  { id: 3, name: "React.js Development", trainer: "John Smith", category: "Web Development", image: card3_img },
  { id: 4, name: "Tailwind CSS Development", trainer: "Sarah Ahmed", category: "Design", image: card4_img },
];

const steps = [
  { id: "01", title: "Choose a Course", description: "Browse 250+ courses across dozens of categories." },
  { id: "02", title: "Learn by Doing", description: "Hands-on projects and real-world assignments." },
  { id: "03", title: "Get Mentored", description: "Live Q&A and 1-on-1 sessions with instructors." },
  { id: "04", title: "Earn Certificate", description: "Complete your course and get certified." },
  { id: "05", title: "Internship Opportunity", description: "3-month internship based on progress and performance." },
];

const instructors = [
  { name: "Sara Martin", role: "Senior Frontend Engineer", bio: "10+ years shipping React apps at scale.", courses: 12, students: "48,000", image: First_instr },
  { name: "Daniel Cho", role: "Product Designer", bio: "Design lead building interfaces for millions of users.", courses: 8, students: "32,000", image: Second_instr },
  { name: "Amelia Rossi", role: "Data Scientist", bio: "PhD in ML, working on applied AI for healthcare.", courses: 6, students: "41,000", image: Third_instr },
  { name: "Lucas Bennett", role: "Growth Marketer", bio: "Scaled 3 startups from zero to Series B.", courses: 5, students: "22,000", image: Fourth_instr },
];

const communityImages = [
  { id: 1, src: Community_img1, alt: "Community learning moment" },
  { id: 2, src: Community_img2, alt: "Students collaborating in class" },
  { id: 3, src: Community_img3, alt: "Hands-on coding session" },
  { id: 4, src: Community_img4, alt: "Campus life and activities" },
  { id: 5, src: Community_img5, alt: "Group project showcase" },
];

const Home = () => {
  const navigate = useNavigate();
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true, amount: 0.4 });
  const [showJourney, setShowJourney] = useState(false);
  const [showRest, setShowRest] = useState(false);

  return (
    <div>
      <Herosection />
      <main className="overflow-hidden bg-[#0a0a0a] py-12 sm:py-16 lg:py-20">
        <section className="shell overflow-hidden">
          <div className="mb-8 flex flex-col gap-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">Popular Programs</p>
              <h2 ref={headingRef} className="mt-3 text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
                {isInView && (
                  <>
                    <TypeAnimation sequence={["Start your ", () => setShowJourney(true)]} speed={50} cursor={false} repeat={0} wrapper="span" />
                    {showJourney && <TypeAnimation sequence={["learning journey", () => setShowRest(true)]} speed={50} cursor={false} repeat={0} wrapper="span" className="text-red-500" />}
                    {showRest && <TypeAnimation sequence={[" with us"]} speed={50} cursor={false} repeat={0} wrapper="span" />}
                  </>
                )}
              </h2>
            </div>
            <button onClick={() => navigate("/courses")} className="inline-flex items-center justify-center rounded-full border border-red-600/60 px-5 py-2.5 text-sm font-semibold text-red-500 transition hover:bg-red-600 hover:text-white">
              View all courses
            </button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {courses.map((course) => (
              <article key={course.id} className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#121212] shadow-[0_20px_60px_-25px_rgba(0,0,0,0.7)] transition duration-300 hover:-translate-y-1 hover:border-red-500/40">
                <div className="relative overflow-hidden">
                  <img src={course.image} alt={course.name} loading="lazy" className="h-44 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-52 md:h-56" />
                  <span className="absolute left-3 top-3 rounded-full bg-red-600 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">{course.category}</span>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-lg font-semibold text-white sm:text-xl">{course.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-400">
                    <span className="text-gray-500">Trainer:</span> <span className="font-medium text-gray-200">{course.trainer}</span>
                  </p>
                  <button className="mt-auto inline-flex items-center justify-center rounded-full bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700">Enroll Now</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="shell mt-16 sm:mt-20">
          <div className="flex justify-center">
            <span className="rounded-full border border-red-600/60 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-red-400">How It Works</span>
          </div>
          <h2 className="mt-5 text-center text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">Your journey in 5 simple steps</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {steps.map((step) => (
              <div key={step.id} className="rounded-[1.5rem] border border-white/10 bg-[#101010] p-6 transition hover:border-red-500/40 hover:shadow-[0_16px_50px_-20px_rgba(255,0,0,0.4)]">
                <p className="text-5xl font-bold text-red-900/70">{step.id}</p>
                <h3 className="mt-5 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="shell mt-16 sm:mt-20">
          <div className="flex justify-center">
            <span className="rounded-full border border-red-600/60 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-red-400">Meet the Instructors</span>
          </div>
          <h2 className="mt-5 text-center text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">Learn from working professionals</h2>
          <p className="section-subtitle">Practitioners at top companies who teach what they actually ship.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {instructors.map((instructor) => (
              <article key={instructor.name} className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#111111] transition hover:-translate-y-1 hover:border-red-500/40">
                <div className="overflow-hidden">
                  <img src={instructor.image} alt={instructor.name} loading="lazy" className="h-64 w-full object-cover transition duration-500 hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-white">{instructor.name}</h3>
                  <p className="mt-1 text-sm font-medium text-red-500">{instructor.role}</p>
                  <p className="mt-3 text-sm leading-7 text-gray-400">{instructor.bio}</p>
                  <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
                    <span>{instructor.courses} courses</span>
                    <span>{instructor.students} students</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="shell mt-16 sm:mt-20">
          <div className="flex justify-center">
            <span className="rounded-full border border-red-600/60 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-red-400">Campus Life</span>
          </div>
          <h2 className="mt-5 text-center text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">Moments from our community</h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {communityImages.map((image, index) => (
              <div key={image.id} className={`group overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#121212] ${index === 0 ? "sm:col-span-2 lg:row-span-2" : ""}`}>
                <img src={image.src} alt={image.alt} loading="lazy" className="h-56 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 lg:h-80" />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;

function Herosection() {
  return (
    <section className="relative overflow-hidden bg-[#080808]">
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-red-600/20 blur-[120px] sm:h-[28rem] sm:w-[28rem]" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-red-500/10 blur-[100px] sm:h-96 sm:w-96" />

      <div className="shell relative z-10 grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
        <div className="max-w-2xl text-white">
          <span className="inline-flex rounded-full border border-red-600/60 bg-red-600/10 px-4 py-2 text-sm font-medium text-red-400 sm:px-5">🚀 Welcome to SoftNova Academy</span>
          <h1 className="mt-6 text-[2rem] font-bold leading-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            Learn skills that
            <span className="mt-3 block text-red-500">build your future</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
            Master web development, Python, data science, and modern technologies through practical projects and industry-focused training.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              { title: "Expert Training", desc: "Industry-focused courses" },
              { title: "Practical Projects", desc: "Learn by building" },
              { title: "Career Support", desc: "Guidance beyond the class" },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                <h3 className="text-sm font-semibold text-white sm:text-base">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
            <div className="min-w-[8rem] rounded-2xl border border-white/10 bg-white/5 px-4 py-4 sm:px-5">
              <h2 className="text-2xl font-bold text-red-500">10+</h2>
              <p className="mt-1 text-sm text-gray-400">Courses</p>
            </div>
            <div className="min-w-[8rem] rounded-2xl border border-white/10 bg-white/5 px-4 py-4 sm:px-5">
              <h2 className="text-2xl font-bold text-red-500">500+</h2>
              <p className="mt-1 text-sm text-gray-400">Students</p>
            </div>
            <div className="min-w-[8rem] rounded-2xl border border-white/10 bg-white/5 px-4 py-4 sm:px-5">
              <h2 className="text-2xl font-bold text-red-500">4.9</h2>
              <p className="mt-1 text-sm text-gray-400">Rating</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[34rem]">
          <div className="absolute inset-0 rounded-[2rem] bg-red-600/20 blur-3xl" />
          <img src="/Home.jpeg" alt="Students learning at SoftNova Academy" loading="eager" className="relative h-[18rem] w-full rounded-[2rem] border border-white/10 object-cover shadow-2xl sm:h-[24rem] md:h-[28rem] lg:h-[34rem]" />

          <div className="mt-4 grid gap-3 sm:grid-cols-2 md:absolute md:bottom-6 md:left-4 md:mt-0 md:w-[16rem] md:grid-cols-1">
            <div className="rounded-2xl border border-white/10 bg-black/80 px-4 py-4 backdrop-blur">
              <h3 className="text-sm font-semibold text-white">⭐ 4.9/5 Rating</h3>
              <p className="mt-1 text-sm text-gray-400">Student reviews</p>
            </div>
            <div className="rounded-2xl border border-red-500/40 bg-red-600 px-4 py-4 text-white">
              <h3 className="text-xl font-bold">500+</h3>
              <p className="mt-1 text-sm">Learners</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
  