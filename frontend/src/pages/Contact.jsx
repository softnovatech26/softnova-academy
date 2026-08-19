import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { courses } from "../data/courses";

function Contact() {
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    email: "",
    phone: "",
    city: "",
    course: "",
    qualification: "",
    paymentMethod: "",
    paymentAmount: "",
    transactionId: "",
    message: "",
    paymentScreenshot: null,
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // Automatically select course when coming from "Enroll Now"
  useEffect(() => {
    const selectedCourse = searchParams.get("course");

    if (selectedCourse) {
      setFormData((prev) => ({
        ...prev,
        course: selectedCourse,
      }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const data = new FormData();

      Object.keys(formData).forEach((key) => {
        if (formData[key] !== null) {
          data.append(key, formData[key]);
        }
      });

      const response = await axios.post(
        "https://softnova-academy-production.up.railway.app/api/contact",
        data
      );

      setStatus(
        response.data.message ||
          "Registration submitted successfully!"
      );

      setFormData({
        fullName: "",
        fatherName: "",
        email: "",
        phone: "",
        city: "",
        course: "",
        qualification: "",
        paymentMethod: "",
        paymentAmount: "",
        transactionId: "",
        message: "",
        paymentScreenshot: null,
      });

      document.getElementById("registration-form")?.reset();
    } catch (error) {
      console.error("Registration Error:", error);

      setStatus(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a0a] px-3 py-12 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-500/40 via-transparent to-transparent" />

      <section className="relative z-10 mx-auto max-w-6xl">

        {/* Header */}
        <div
          className="mb-10 text-center sm:mb-14"
          data-aos="zoom-in"
          data-aos-duration="800"
        >
          <span className="inline-block rounded-full border border-red-600/60 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-red-400">
            Apply For Registration
          </span>

          <h1 className="mt-6 text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
            Join{" "}
            <span className="text-red-500">
              SoftNova
            </span>{" "}
            Academy
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Complete the registration form below to apply for your
            selected course.
          </p>
        </div>

        {/* Registration Form */}
        <div
          className="rounded-[2rem] border border-white/10 bg-[#111111]/90 p-4 shadow-2xl backdrop-blur-xl sm:p-6 md:p-8 lg:p-10"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <form
            id="registration-form"
            onSubmit={handleSubmit}
            className="space-y-8"
          >

            {/* Personal Information */}
            <section>
              <div className="mb-6">
                <h2 className="text-xl font-bold sm:text-2xl">
                  Personal Information
                </h2>
                <div className="mt-2 h-1 w-16 rounded-full bg-red-500" />
              </div>

              <div className="grid gap-5 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white outline-none transition focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Father Name *
                  </label>

                  <input
                    type="text"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleChange}
                    required
                    placeholder="Enter father's name"
                    className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white outline-none transition focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Email *
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="example@gmail.com"
                    className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white outline-none transition focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Phone Number *
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+92 3XX XXXXXXX"
                    className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white outline-none transition focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    City *
                  </label>

                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    placeholder="Enter your city"
                    className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white outline-none transition focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Qualification *
                  </label>

                  <input
                    type="text"
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Intermediate, BSCS"
                    className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white outline-none transition focus:border-red-500"
                  />
                </div>

              </div>
            </section>

            {/* Course Information */}
            <section>
              <div className="mb-6">
                <h2 className="text-xl font-bold sm:text-2xl">
                  Course Information
                </h2>
                <div className="mt-2 h-1 w-16 rounded-full bg-red-500" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Select Course *
                </label>

                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white outline-none transition focus:border-red-500"
                >
                  <option value="" className="bg-[#111111]">
                    Select a course
                  </option>

                  {courses.map((course) => (
                    <option
                      key={course.id}
                      value={course.title}
                      className="bg-[#111111]"
                    >
                      {course.title}
                    </option>
                  ))}
                </select>
              </div>
            </section>

            {/* Payment Information */}
            <section>
              <div className="mb-6">
                <h2 className="text-xl font-bold sm:text-2xl">
                  Payment Information
                </h2>
                <div className="mt-2 h-1 w-16 rounded-full bg-red-500" />
              </div>

              <div className="mb-6 rounded-2xl border border-red-500/20 bg-red-500/5 p-5">
                <h3 className="font-semibold text-red-400">
                  Payment Instructions
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  Complete your course payment using your preferred
                  payment method. After payment, enter your transaction
                  details and upload the payment screenshot below.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Payment Method *
                  </label>

                  <select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white outline-none transition focus:border-red-500"
                  >
                    <option value="" className="bg-[#111111]">
                      Select payment method
                    </option>

                    <option value="EasyPaisa" className="bg-[#111111]">
                      EasyPaisa
                    </option>

                    <option value="JazzCash" className="bg-[#111111]">
                      JazzCash
                    </option>

                    <option value="Bank Transfer" className="bg-[#111111]">
                      Bank Transfer
                    </option>

                    <option value="Other" className="bg-[#111111]">
                      Other
                    </option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Payment Amount *
                  </label>

                  <input
                    type="number"
                    name="paymentAmount"
                    value={formData.paymentAmount}
                    onChange={handleChange}
                    required
                    placeholder="Enter amount"
                    className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white outline-none transition focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                         Transaction ID (Optional)
                     </label>
                 <input
                 type="text"
                   name="transactionId"
                 value={formData.transactionId}
                  onChange={handleChange}
               placeholder="Enter transaction ID (Optional)"
            className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white outline-none transition focus:border-red-500"
                          />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Payment Screenshot *
                  </label>

                  <input
                    type="file"
                    name="paymentScreenshot"
                    accept="image/png,image/jpeg,image/jpg,image/webp"
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/50 px-3 py-3 text-sm text-gray-400 file:mr-4 file:rounded-lg file:border-0 file:bg-red-500 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-red-600"
                  />

                  <p className="mt-2 text-xs text-gray-500">
                    PNG, JPG or WEBP image only.
                  </p>
                </div>

              </div>
            </section>

            {/* Message */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Additional Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Any additional information..."
                className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white outline-none transition focus:border-red-500"
              />
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-red-600 px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.01] hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading
                  ? "Submitting Registration..."
                  : "Submit Registration"}
              </button>

              {status && (
                <div className="mt-5 rounded-xl border border-red-500/20 bg-red-500/5 p-4 text-center text-sm text-red-400">
                  {status}
                </div>
              )}
            </div>

          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;