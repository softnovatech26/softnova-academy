import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
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
// (Community_img6 import removed)
import React from "react";
import { TypeAnimation } from "react-type-animation";

const courses = [
  {
    id: 1,
    name: "Complete HTML, CSS and JavaScript",
    trainer: "Ali Ahmmad Khan",
    category: "Web Development",
    image: card1_img,
  },
  {
    id: 2,
    name: "Python for Data Science",
    trainer: "Ahmed Raza",
    category: "Data Science",
    image: card2_img,
  },
  {
    id: 3,
    name: "React.js Development",
    trainer: "John Smith",
    category: "Web Development",
    image: card3_img,
  },
  {
    id: 4,
    name: "Tailwind CSS Development",
    trainer: "Sarah Ahmed",
    category: "Design",
    image: card4_img,
  },
];

const steps = [
  {
    id: "01",
    title: "Choose a Course",
    description: "Browse 250+ courses across dozens of categories.",
  },
  {
    id: "02",
    title: "Learn by Doing",
    description: "Hands-on projects and real-world assignments.",
  },
  {
    id: "03",
    title: "Get Mentored",
    description: "Live Q&A and 1-on-1 sessions with instructors.",
  },
  {
    id: "04",
    title: "Earn Certificate",
    description: "Complete your course and get certified.",
  },
  {
    id: "05",
    title: "Internship Opportunity",
    description: "3-Month Internship Based on Course Progress, Skills & Class Performance.",
  },
];

const instructors = [
  {
    name: "Sara Martin",
    role: "Senior Frontend Engineer",
    bio: "10+ years shipping React apps at scale. Ex-Meta.",
    courses: 12,
    students: "48,000",
    image: First_instr,
  },
  {
    name: "Daniel Cho",
    role: "Product Designer",
    bio: "Design lead building interfaces for millions of users.",
    courses: 8,
    students: "32,000",
    image: Second_instr,
  },
  {
    name: "Amelia Rossi",
    role: "Data Scientist",
    bio: "PhD in ML, working on applied AI for healthcare.",
    courses: 6,
    students: "41,000",
    image: Third_instr,
  },
  {
    name: "Lucas Bennett",
    role: "Growth Marketer",
    bio: "Scaled 3 startups from zero to Series B.",
    courses: 5,
    students: "22,000",
    image: Fourth_instr,
  },
];

const communityImages = [
  {
    id: 1,
    src: Community_img1,
    alt: "Community moment 1",
    span: "main"
  },
  {
    id: 2,
    src: Community_img2,
    alt: "Community moment 2",
    span: "normal"
  },
  {
    id: 3,
    src: Community_img3,
    alt: "Community moment 3",
    span: "normal"
  },
  {
    id: 4,
    src: Community_img4,
    alt: "Community moment 4",
    span: "normal"
  },
  {
    id: 5,
    src: Community_img5,
    alt: "Community moment 5",
    span: "normal"
  },
];

const Home = () => {
  const navigate = useNavigate();
  const headingRef = useRef(null);

  const isInView = useInView(headingRef, {
    once: true,
    amount: 0.4,
  });

  const [showJourney, setShowJourney] = useState(false);
  const [showRest, setShowRest] = useState(false);

  return (
    <div>
      <Herosection />
      <main className="min-h-screen bg-gradient-to-br bg-[#0a0a0a] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        {/* Courses section */}
        <section className="cards">
          <div className="max-w-7xl mx-auto">
            <div className="sec-heading text-center mb-6">


              <h1 ref={headingRef} className="text-3xl sm:text-4xl font-bold text-white">
                {isInView && (
                  <>
                    <TypeAnimation
                      sequence={[
                        "Start your ",
                        () => setShowJourney(true),
                      ]}
                      speed={50}
                      cursor={false}
                      repeat={0}
                      wrapper="span" />

                    {showJourney && (
                      <TypeAnimation
                        sequence={[
                          "learning journey",
                          () => setShowRest(true),
                        ]}
                        speed={50}
                        cursor={false}
                        repeat={0}
                        wrapper="span"
                        className="text-red-600" />
                    )}

                    {showRest && (
                      <TypeAnimation
                        sequence={[" with us"]}
                        speed={50}
                        cursor={false}
                        repeat={0}
                        wrapper="span" />
                    )}
                  </>
                )}
              </h1>

            </div>

            <div className="flex justify-center sm:justify-start mb-8 sm:mb-12">
              <button onClick={() => navigate("/courses")} className="w-full sm:w-auto bg-transparent text-red-600 border border-red-600 px-5 py-2 sm:px-6 sm:py-2.5 rounded-lg text-xs sm:text-sm md:text-base font-semibold transition-all duration-300 hover:bg-red-600 hover:text-white hover:scale-105">
                View all courses
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
              {courses.map((course) => (
                <div key={course.id} className="group bg-[#141414] rounded-2xl overflow-hidden shadow-lg border border-gray-800 transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-3 hover:shadow-red-500/20">
                  <div className="relative overflow-hidden">
                    <img src={course.image} alt={course.name} className="w-full h-44 sm:h-48 lg:h-56 object-cover object-center transition-transform duration-500 group-hover:scale-110" />
                    <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                      {course.category}
                    </span>
                  </div>
                  <div className="p-5 sm:p-6">
                    <h2 className="text-lg sm:text-xl font-bold text-white leading-6 sm:leading-7 mb-3 min-h-[48px] sm:min-h-[56px]">
                      {course.name}
                    </h2>
                    <p className="text-sm text-gray-400 mb-5">
                      <span className="text-gray-500">Trainer:</span>{" "}
                      <span className="text-white font-medium">
                        {course.trainer}
                      </span>
                    </p>
                    <button className="w-full bg-red-600 text-white py-2.5 sm:py-3 text-sm sm:text-base rounded-lg font-semibold border border-gray-700 transition-all duration-300 hover:bg-black hover:border-blue-600 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
                      Enroll Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Steps section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-5">
            <div className="flex justify-center">
              <span className="border border-red-600 text-red-500 text-xs tracking-widest uppercase rounded-full px-5 py-2">
                How It Works
              </span>
            </div>
            <h2 className="text-center text-white text-4xl md:text-5xl font-bold mt-5">
              Your journey in 5 steps
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">
              {steps.map((step) => (
                <div key={step.id} className="group border border-white/10 rounded-3xl p-8 bg-black hover:border-red-600 transition-all duration-300">
                  <h1 className="text-6xl font-bold text-red-900/70">
                    {step.id}
                  </h1>
                  <h3 className="text-white text-xl font-semibold mt-6">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 mt-4 leading-7">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Instructors section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-5">
            <div className="flex justify-center">
              <span className="border border-red-600 text-red-500 text-xs tracking-widest uppercase rounded-full px-5 py-2">
                Meet the Instructors
              </span>
            </div>
            <h2 className="text-center text-white text-3xl md:text-5xl font-bold mt-5">
              Learn from working <br /> professionals
            </h2>
            <p className="text-center md:text-lg text-gray-400 mt-4 max-w-2xl mx-auto leading-8">
              Practitioners at top companies who teach what they actually ship.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              {instructors.map((instructor) => (
                <div key={instructor.name} className="group relative overflow-hidden rounded-2xl bg-[oklch(14%_.02_20)] border border-gray-800 transition-all duration-300 hover:-translate-y-2 hover:border-red-600 hover:shadow-red-500/20 hover:shadow-lg">
                  <div className="relative aspect-[3/3] w-full overflow-hidden">
                    <img src={instructor.image} alt={instructor.name} loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <h3 className="text-lg font-bold text-white">
                        {instructor.name}
                      </h3>
                      <p className="text-sm font-medium text-red-500">
                        {instructor.role}
                      </p>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-400 leading-6 pe-[40px]">
                      {instructor.bio}
                    </p>
                    <div className="flex items-center justify-between pt-3 text-sm">
                      <span className="text-gray-300">
                        <span className="font-semibold text-white">
                          {instructor.courses}
                        </span>{" "}
                        courses
                      </span>
                      <span className="text-gray-300">
                        <span className="font-semibold text-white">
                          {instructor.students}
                        </span>{" "}
                        students
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community section */}
        <section className="community-section container py-20">
          <div className="max-w-7xl mx-auto px-5">
            <div className="flex justify-center mb-3">
              <span className="bg-[oklch(0.16_0.05_15.85)] border border-red-600 text-red-500 text-xs tracking-widest uppercase rounded-full px-4 py-1 font-semibold">
                Campus Life
              </span>
            </div>
            <h2 className="text-center text-white text-4xl md:text-5xl font-bold">
              Moments from our <br /> community
            </h2>
            <div className="mt-12 grid grid-cols-2 lg:grid-cols-3 auto-rows-[200px] lg:auto-rows-[240px] gap-3">
              <div className="lg:row-span-2 col-span-2 lg:col-span-1 overflow-hidden rounded-2xl bg-[#141414] border border-gray-800 group relative">
                <img
                  src={communityImages[0].src}
                  alt={communityImages[0].alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/40" />
              </div>
              <div className="lg:col-start-2 lg:row-start-1 overflow-hidden rounded-2xl bg-[#141414] border border-gray-800 group relative">
                <img
                  src={communityImages[1].src}
                  alt={communityImages[1].alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/40" />
              </div>
              <div className="lg:col-start-2 lg:row-start-2 overflow-hidden rounded-2xl bg-[#141414] border border-gray-800 group relative">
                <img
                  src={communityImages[2].src}
                  alt={communityImages[2].alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/40" />
              </div>
              <div className="hidden lg:block lg:col-start-3 lg:row-start-1 overflow-hidden rounded-2xl bg-[#141414] border border-gray-800 group relative">
                <img
                  src={communityImages[3].src}
                  alt={communityImages[3].alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/40" />
              </div>
              <div className="hidden lg:block lg:col-start-3 lg:row-start-2 overflow-hidden rounded-2xl bg-[#141414] border border-gray-800 group relative">
                <img
                  src={communityImages[4].src}
                  alt={communityImages[4].alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/40" />
              </div>
              <div className="lg:hidden overflow-hidden rounded-2xl bg-[#141414] border border-gray-800 group relative">
                <img
                  src={communityImages[3].src}
                  alt={communityImages[3].alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/40" />
              </div>
              <div className="lg:hidden overflow-hidden rounded-2xl bg-[#141414] border border-gray-800 group relative">
                <img
                  src={communityImages[4].src}
                  alt={communityImages[4].alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/40" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;

function Herosection() {
  return (
    <section className="relative min-h-screen bg-[#080808] overflow-hidden flex items-center">

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-500/10 blur-[100px] rounded-full"></div>


      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">


        {/* LEFT CONTENT */}
        <div className="text-white">

          <span className="inline-block border border-red-600 text-red-500 px-5 py-2 rounded-full text-sm mb-6">
            🚀 Welcome To SoftNova Academy
          </span>


          <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-tight">
            Learn Skills That
            <span className="text-red-600 block">
              Build Your Future
            </span>
          </h1>


          <p className="text-gray-400 text-lg mt-6 max-w-xl leading-8">
            Master Web Development, Python, Data Science and modern
            technologies with practical projects and industry-focused training.
          </p>


         <div className="flex flex-wrap gap-4 mt-8">

  <div className="bg-white/5 border border-gray-800 rounded-xl px-5 py-3">
    <h3 className="text-white font-semibold">
      🎓 Expert Training
    </h3>
    <p className="text-gray-400 text-sm">
      Industry-focused courses
    </p>
  </div>


  <div className="bg-white/5 border border-gray-800 rounded-xl px-5 py-3">
    <h3 className="text-white font-semibold">
      💻 Practical Projects
    </h3>
    <p className="text-gray-400 text-sm">
      Learn by building
    </p>
  </div>


  <div className="bg-white/5 border border-gray-800 rounded-xl px-5 py-3">
    <h3 className="text-white font-semibold">
      🏆 Certificate
    </h3>
    <p className="text-gray-400 text-sm">
      Career growth support
    </p>
  </div>

</div>


          {/* Stats */}

          <div className="flex gap-6 mt-12">

            <div className="bg-white/5 border border-gray-800 rounded-xl px-6 py-4">
              <h2 className="text-3xl font-bold text-red-500">
                10+
              </h2>
              <p className="text-gray-400 text-sm">
                Courses
              </p>
            </div>


            <div className="bg-white/5 border border-gray-800 rounded-xl px-6 py-4">
              <h2 className="text-3xl font-bold text-red-500">
                500+
              </h2>
              <p className="text-gray-400 text-sm">
                Students
              </p>
            </div>


            <div className="bg-white/5 border border-gray-800 rounded-xl px-6 py-4">
              <h2 className="text-3xl font-bold text-red-500">
                4.9
              </h2>
              <p className="text-gray-400 text-sm">
                Rating
              </p>
            </div>

          </div>

        </div>



        {/* RIGHT IMAGE */}

        <div className="relative">


          <div className="absolute inset-0 bg-red-600/20 blur-3xl rounded-full"></div>


          <img
            src="/Home.jpeg"
            alt="Students"
            className="
            relative 
            rounded-3xl 
            shadow-2xl
            w-full
            h-[550px]
            object-cover
            border
            border-gray-800
            "
          />


          {/* Floating Card */}

          <div className="absolute top-10 -left-6 bg-black/80 backdrop-blur border border-gray-700 rounded-xl px-5 py-4">

            <h3 className="text-white font-bold">
              ⭐ 4.9/5 Rating
            </h3>

            <p className="text-gray-400 text-sm">
              Student Reviews
            </p>

          </div>



          <div className="absolute bottom-10 -right-6 bg-red-600 rounded-xl px-6 py-4">

            <h3 className="text-white text-2xl font-bold">
              500+
            </h3>

            <p className="text-white text-sm">
              Learners
            </p>

          </div>


        </div>


      </div>

    </section>
  );
}
  