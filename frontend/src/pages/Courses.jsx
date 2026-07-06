import React from "react";

const coursesData = [
  {
    id: 1,
    title: "Complete HTML, CSS and JavaScript",
    image: "/html.png",
    trainer: "John Smith",
  },
  {
    id: 2,
    title: "Python for Data Science",
    image: "/python.jpeg",
    trainer: "Sarah Johnson",
  },
  {
    id: 3,
    title: "React.js Development",
    image: "/react.png",
    trainer: "Mike Davis",
  },
  {
    id: 4,
    title: "Tailwind CSS Development",
    image: "/tailwand.png",
    trainer: "Emily Brown",
  },
  {
    id: 5,
    title: "Artificial Intelligence",
    image: "/ai.jfif",
    trainer: "Dr. Alex Kumar",
  },
  {
    id: 6,
    title: "React Native App Development",
    image: "/reactnative.jfif",
    trainer: "Chris Wilson",
  },
];

function Courses() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      
      {/* Background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-500/60 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            All <span className="text-red-500">Courses</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Master industry-leading skills with our comprehensive course collection
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {coursesData.map((course) => (
            <div
              key={course.id}
              className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-2xl overflow-hidden hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20 group flex flex-col"
            >

              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gray-800">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors">
                    {course.title}
                  </h3>

                  <div className="mb-6">
                    <p className="text-gray-400 text-sm mb-2">Instructor</p>
                    <p className="text-white font-bold text-lg">
                      {course.trainer}
                    </p>
                  </div>
                </div>

                {/* Button */}
                <button className="w-full bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-red-500/50 cursor-pointer hover:scale-105">
                  Enroll Now
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>
    </main>
  );
}

export default Courses;