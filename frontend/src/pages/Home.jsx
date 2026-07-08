import { useNavigate } from "react-router-dom";
import card1_img from "../assets/images/card_1_img.png";
import card2_img from "../assets/images/card_2_img.jpg";
import card3_img from "../assets/images/card3.png";
import card4_img from "../assets/images/card4.png";
import First_instr from "../assets/images/first_instr.jpg";
import Second_instr from "../assets/images/second_instr.jpg";
import Third_instr from "../assets/images/third_instr.jpg";
import Fourth_instr from "../assets/images/fourth_instr.jpg";
import React from "react";

const courses = [
  {
    id: 1,
    name: "Complete HTML, CSS and JavaScript",
    trainer: "Ali Khan",
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


const Home = ( ) => {

  const navigate = useNavigate();


  // return (
  //   <main
  //     style={{
  //       minHeight: "100vh",
  //       display: "flex",
  //       justifyContent: "center",
  //       alignItems: "center",
  //       fontSize: "40px",
  //     }}
  //   >
  //     Home Page



  //   </main>
  // );



 

  return ( 
     <div>
      <Herosection/>
    <main className="min-h-screen bg-gradient-to-br  bg-[#0a0a0a] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <section className="cards">
        <div className="max-w-7xl mx-auto">

          {/* Section Heading */}
         <div className="sec-heading text-center mb-6">
  <h1 className="text-3xl sm:text-4xl font-bold text-white">
    Start your <span className="text-red-600">learning journey</span> with us
  </h1>
</div>

            {/* All Courses Button - left aligned */}
            <div className="flex justify-center sm:justify-start mb-8 sm:mb-12">
              <button  onClick={() => navigate("/courses")} className=" w-full sm:w-auto bg-transparent text-red-600 border border-red-600 px-5 py-2 sm:px-6 sm:py-2.5 rounded-lg text-xs sm:text-sm md:text-base font-semibold transition-all duration-300 hover:bg-red-600 hover:text-white hover:scale-105">
                View all courses
              </button>
            </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">

            {courses.map((course) => (
              <div key={course.id} className="group bg-[#141414] rounded-2xl overflow-hidden shadow-lg border border-gray-800 transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-3 hover:shadow-red-500/20" >
                {/* Image with category badge */}

                <div className="relative overflow-hidden">
                  <img src={course.image} alt={course.name} className="w-full h-44 sm:h-48 lg:h-56 object-cover object-center transition-transform duration-500 group-hover:scale-110" />

                  <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    {course.category}
                  </span>
                </div>

                {/* Content */}

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



   <section className="py-20">
      <div className="max-w-7xl mx-auto px-5">
        {/* Top Badge */}
        <div className="flex justify-center">
          <span className="border border-red-600 text-red-500 text-xs tracking-widest uppercase rounded-full px-5 py-2">
            How It Works
          </span>
        </div>
        {/* Heading */}
        <h2 className="text-center text-white text-4xl md:text-5xl font-bold mt-5">
          Your journey in 5 steps
        </h2>
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">
          {steps.map((step) => (
            <div key={step.id} className="group border border-white/10 rounded-3xl p-8 bg-black hover:border-red-600 transition-all duration-300" >
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



    {/* ===== Instructors section ===== */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-5">
            {/* Top Badge */}
            <div className="flex justify-center">
              <span className="border border-red-600 text-red-500 text-xs tracking-widest uppercase rounded-full px-5 py-2">
                Meet the Instructors
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-center text-white text-3xl md:text-5xl font-bold mt-5">
              Learn from working <br /> professionals
            </h2>
            <p className="text-center md:text-lg text-gray-400 mt-4 max-w-2xl mx-auto leading-8">
             Practitioners at top companies who teach what they actually ship.
             </p>
 
            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              {instructors.map((instructor) => (
                <div key={instructor.name} className="group relative overflow-hidden rounded-2xl bg-[oklch(14% .02 20)] border border-gray-800 transition-all duration-300 hover:-translate-y-2 hover:border-red-600 hover:shadow-red-500/20 hover:shadow-lg" >
                  {/* Image */}
                  <div className="relative aspect-[3/3] w-full overflow-hidden">
                    <img src={instructor.image} alt={instructor.name} loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    {/* Gradient overlay for text legibility */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                    {/* Name + role over image */}
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <h3 className="text-lg font-bold text-white">
                        {instructor.name}
                      </h3>
                      <p className="text-sm font-medium text-red-500">
                        {instructor.role}
                      </p>
                    </div>
                  </div>

                  {/* Bottom info panel */}
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


    </main>
    </div>
  );
};

export default Home;


function Herosection(){


return (
    <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-8">
      
      {/* Background radial gradient effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-500/60 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-15 z-10 pt-24">
        
        {/* Left Side */}
        <div className="flex-1 text-white space-y-6 pt-32">
          
          <div className="inline-flex items-center gap-2 border border-red-500/30 bg-red-950/20 px-3 py-1 rounded-full text-red-500 text-sm">
            <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
            New cohort starts January 15
          </div>

          <h1 className="text-7xl font-bold leading-tight font-serif pr-10">
            Skills that get you <span className="text-red-500">hired.</span>
          </h1>

          <p className="text-gray-400 text-lg max-w-md">
            Join 100,000+ learners mastering web development, design, data & business with courses taught by industry-leading professionals.
          </p>

          <div className="flex gap-8 pt-8">
            <div>
              <div className="text-2xl font-bold">15+</div>
              <div className="text-gray-500 text-sm">COURSES</div>
            </div>

            <div>
              <div className="text-2xl font-bold">100K+</div>
              <div className="text-gray-500 text-sm">STUDENTS</div>
            </div>

            <div>
              <div className="text-2xl font-bold">4.9 ★</div>
              <div className="text-gray-500 text-sm">AVG. RATING</div>
            </div>
          </div>

        </div>

        {/* Right Side */}
        <div className="flex-1 relative">
          <img src="/hero.jpg" alt="Students collaborating" className="rounded-3xl shadow-2xl w-full h-[500px] object-cover" />

          <div className="absolute top-6 left-5 bg-red-900/10 backdrop-blur p-4 rounded-xl border border-gray-700 flex items-center gap-3">
            <div className="bg-red-500 p-3 rounded-full text-xs">★</div>
            <div>
              <div className="font-bold text-white">4.9 / 5</div>
              <div className="text-gray-400 text-xs">from 28k reviews</div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );

};




