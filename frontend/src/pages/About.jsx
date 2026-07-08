import React from "react";

function About() {
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
            <span className="text-red-500">accessible</span>
          </h3>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div>
            <img
              src="/studygroup.jpg"
              alt="Study Group"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>

          {/* Right Description */}
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
      </div>
    </main>
  );
}

export default About;