const Home = () => {
  return (
    <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-8">
      {/* Background radial gradient effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-500/60 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-15 z-10 pt-24">
        {/* Left Side: Content */}
        <div className="flex-1 text-white space-y-6  pt-32">
          <div className="inline-flex items-center gap-2 border border-red-500/30 bg-red-950/20 px-3 py-1 rounded-full text-red-500 text-sm ">
            <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse " />
            New cohort starts January 15
          </div>
          
          <h1 className="text-7xl font-bold leading-tight font-serif pr-10">
            Skills that get you <span className="text-red-500">hired.</span>
          </h1>
          
          <p className="text-gray-400 text-lg max-w-md">
            Join 100,000+ learners mastering web development, design, data & business with courses taught by industry-leading professionals.
          </p>

         

          <div className="flex gap-8 pt-8 ">
            <div><div className="text-2xl font-bold">15+</div><div className="text-gray-500 text-sm">COURSES</div></div>
            <div><div className="text-2xl font-bold">100K+</div><div className="text-gray-500 text-sm">STUDENTS</div></div>
            <div><div className="text-2xl font-bold text-re">4.9 ★</div><div className="text-gray-500 text-sm">AVG. RATING</div></div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="flex-1 relative">
          <img 
            src="/hero.jpg" 
            alt="Students collaborating" 
            className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
          />
          {/* Overlay badge on image */}
          <div className="absolute top-6 left-5 bg-red-1000/10 backdrop-blur p-4 rounded-xl border border-gray-700 flex items-center gap-3">
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

export default Home;