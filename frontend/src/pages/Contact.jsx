import React from "react";

function Contact() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white py-20 px-5 relative overflow-hidden">

      {/* Background Red Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-500/40 via-transparent to-transparent pointer-events-none"></div>

      <section className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="border border-red-600 text-red-500 text-xs tracking-widest uppercase rounded-full px-5 py-2">
            Contact Us
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mt-6">
            Get in touch with{" "}
            <span className="text-red-500">SoftNova</span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5">
            Have questions about our courses, internships, or programs?
            Contact our team and we will help you.
          </p>

        </div>


        {/* Contact Section */}
        <div className="grid md:grid-cols-2 gap-10">


          {/* Contact Information */}
          <div className="bg-[#141414] border border-gray-800 rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              Contact Information
            </h2>


            <div className="space-y-5">

              <div className="border border-gray-800 rounded-xl p-5">
                <h3 className="text-red-500 font-semibold">
                  Email
                </h3>
                <p className="text-gray-400">
                  info@softnova.com
                </p>
              </div>


              <div className="border border-gray-800 rounded-xl p-5">
                <h3 className="text-red-500 font-semibold">
                  Phone
                </h3>
                <p className="text-gray-400">
                  +92 300 1234567
                </p>
              </div>


              <div className="border border-gray-800 rounded-xl p-5">
                <h3 className="text-red-500 font-semibold">
                  Address
                </h3>
                <p className="text-gray-400">
                  Hyderabad, Pakistan
                </p>
              </div>

            </div>

          </div>



          {/* Contact Form */}
          <div className="bg-[#141414] border border-gray-800 rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              Send Message
            </h2>


            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white outline-none focus:border-red-600"
              />


              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white outline-none focus:border-red-600"
              />


              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white outline-none focus:border-red-600"
              ></textarea>


              <button
                type="submit"
                className="w-full bg-red-600 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
              >
                Send Message
              </button>

            </form>

          </div>


        </div>

      </section>

    </main>
  );
}

export default Contact;