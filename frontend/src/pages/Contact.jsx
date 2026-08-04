import React, { useState } from "react";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );

      setStatus(response.data.message);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a0a] px-3 py-12 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20">

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-500/40 via-transparent to-transparent" />

      <section className="relative z-10 mx-auto max-w-7xl">

        {/* Header */}
        <div
          className="mb-12 text-center sm:mb-16"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <span
            className="rounded-full border border-red-600/60 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-red-400"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            Contact Us
          </span>

          <h1
            className="mt-6 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-6xl"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"
          >
            Get in touch with{" "}
            <span className="text-red-500">
              SoftNova
            </span>
          </h1>

          <p
            className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-gray-400 sm:text-base"
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="600"
          >
            Have questions about our courses, internships, or programs?
            Contact our team and we will help you.
          </p>
        </div>


        {/* Contact Grid */}
        <div className="grid gap-8 lg:grid-cols-2">

          {/* Contact Info */}
          <div
            className="rounded-[1.5rem] border border-white/10 bg-[#141414] p-4 sm:p-6 lg:p-8"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            <h2 className="mb-6 text-2xl font-semibold">
              Contact Information
            </h2>

            <div className="space-y-4">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                  Email
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  info@softnova.com
                </p>
              </div>


              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                  Phone
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  +92 300 1234567
                </p>
              </div>


              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                  Address
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  Hyderabad, Pakistan
                </p>
              </div>

            </div>
          </div>



          {/* Form */}
          <div
            className="rounded-[1.5rem] border border-white/10 bg-[#141414] p-4 sm:p-6 lg:p8"
            data-aos="fade-left"
            data-aos-duration="700"
          >
            <h2 className="mb-6 text-2xl font-semibold">
              Send Message
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-red-500"
              />


              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-red-500"
              />


              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-red-500"
              />


              <button
                type="submit"
                className="w-full rounded-full bg-red-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Send Message
              </button>


              {status && (
                <p className="text-center text-sm text-red-400">
                  {status}
                </p>
              )}

            </form>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;