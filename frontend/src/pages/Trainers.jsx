import React from "react";

const trainersData = [
  {
    id: 1,
    name: "Sara Martin",
    role: "Senior Frontend Engineer",
    image: "/teacher1.jfif",
    description: "10+ years shipping React apps at scale. Ex-Meta.",
    courses: 12,
    students: 48000,
  },
  {
    id: 2,
    name: "Daniel Cho",
    role: "Product Designer",
    image: "/teacher2.jfif",
    description: "Design lead building interfaces for millions of users.",
    courses: 8,
    students: 32000,
  },
  {
    id: 3,
    name: "Amelia Rossi",
    role: "Data Scientist",
    image: "/teacher3.jfif",
    description: "PhD in ML, working on applied AI for healthcare.",
    courses: 6,
    students: 41000,
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
];

function Trainers() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] relative overflow-hidden py-16">
      {/* Background radial gradient effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-500/60 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Our Trainers Heading */}
        <div className="text-center mb-1">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our <span className="text-red-500">Trainers</span>
          </h2>
        </div>

        {/* Top Subtitle */}
        <div className="text-center mb-60">
          <p className="text-gray-400 text-lg">
            Learn from practitioners at top companies — not academics teaching theory.
          </p>
        </div>

        {/* Centered Main Heading */}
        <div className="text-center mb-55">
          <h1 className="text-sm md:text-base font-semibold text-red-500">
            Meet the instructors
          </h1>
        </div>

        {/* Subheading with bold text */}
        <div className="text-center mb-6 max-w-3xl mx-auto">
          <p className="text-white text-3xl md:text-4xl font-bold tracking-tight italic mb-4">
            Learn from working professionals
          </p>
          <p className="text-gray-300 text-lg mt-4">
            Practitioners at top companies who teach what they actually ship.
          </p>
        </div>

        <div className="mb-12" />

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainersData.map((trainer) => (
            <div
              key={trainer.id}
              className="group bg-gray-900/50 backdrop-blur border border-gray-800 rounded-2xl overflow-hidden hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20"
            >
              {/* Trainer Image */}
              <div className="relative h-56 overflow-hidden bg-gray-800">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-red-500 transition-colors">
                  {trainer.name}
                </h3>

                <p className="text-red-400 font-semibold text-sm mb-4">
                  {trainer.role}
                </p>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {trainer.description}
                </p>

                {/* Courses and Students Stats */}
                <div className="pt-6 border-t border-gray-800">
                  <div className="flex justify-between text-sm">
                    <div>
                      <p className="text-gray-400">{trainer.courses} courses</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400">{trainer.students.toLocaleString()} students</p>
                    </div>
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