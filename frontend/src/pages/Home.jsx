import card1_img from "../assets/images/card_1_img.png";
import card2_img from "../assets/images/card_2_img.jpg";
import card3_img from "../assets/images/card3.png";
import card4_img from "../assets/images/card4.png";

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


const Home = () => {
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
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <section className="cards">
        <div className="max-w-7xl mx-auto">

          {/* Section Heading */}
         <div className="sec-heading text-center mb-6">
  <h1 className="text-3xl sm:text-4xl font-bold text-white">
    Start your <span className="text-red-600">learning journey</span> with us
  </h1>
</div>

          {/* All Courses Button - left aligned */}
          <div className="flex justify-start mb-12">
            <button className="bg-transparent text-red-600 border border-red-600 px-6 py-2.5 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 hover:bg-red-600 hover:text-white hover:scale-105">
              View all courses
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">

            {courses.map((course) => (
              <div
                key={course.id}
                className="group bg-[#141414] rounded-2xl overflow-hidden shadow-lg border border-gray-800 transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-3 hover:shadow-red-500/20"
              >
                {/* Image with category badge */}

                <div className="relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="w-full h-44 sm:h-48 lg:h-56 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />

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
    </main>
  );
};

export default Home;