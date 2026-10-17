import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

import meeting01 from "../assets/Meetings/softnova-meeting-01.webp";
import meeting02 from "../assets/Meetings/softnova-meeting-02.webp";
import meeting04 from "../assets/Meetings/softnova-meeting-04.webp";
import meeting05 from "../assets/Meetings/softnova-meeting-05.webp";
import meeting06 from "../assets/Meetings/softnova-meeting-06.webp";
import meeting07 from "../assets/Meetings/softnova-meeting-07.webp";
import meeting08 from "../assets/Meetings/softnova-meeting-08.webp";
import meeting09 from "../assets/Meetings/softnova-meeting-09.webp";
import meeting10 from "../assets/Meetings/softnova-meeting-10.webp";

import htmlClass1 from "../assets/HTML Classes/HTML CLass-1 .jpg";
import htmlClass2 from "../assets/HTML Classes/HTML CLass-2 .jpg";
import htmlClass3 from "../assets/HTML Classes/HTML CLass-3 .jpg";
import htmlClass4 from "../assets/HTML Classes/HTML CLass-4.jpg";
import htmlClass5 from "../assets/HTML Classes/HTML CLass-5.jpg";
import htmlClass6 from "../assets/HTML Classes/HTML CLass-6.jpg";
import htmlClass7 from "../assets/HTML Classes/HTML CLass-7.jpg.jpeg";
import htmlClass8 from "../assets/HTML Classes/HTML CLass-8.jpg";
import htmlClass9 from "../assets/HTML Classes/HTML CLass-9.jpg.jpeg";
import htmlClass12 from "../assets/HTML Classes/HTML CLass-12.jpg";

import Family from "../assets/Family/Family.webp";

const meetingImages = [
  { id: 1, src: meeting01, alt: "SoftNova Academy meeting 1" },
  { id: 2, src: meeting02, alt: "SoftNova Academy meeting 2" },
  { id: 3, src: meeting04, alt: "SoftNova Academy meeting 3" },
  { id: 4, src: meeting05, alt: "SoftNova Academy meeting 4" },
  { id: 5, src: meeting06, alt: "SoftNova Academy meeting 5" },
  { id: 6, src: meeting07, alt: "SoftNova Academy meeting 6" },
  { id: 7, src: meeting08, alt: "SoftNova Academy meeting 7" },
  { id: 8, src: meeting09, alt: "SoftNova Academy meeting 8" },
  { id: 9, src: meeting10, alt: "SoftNova Academy meeting 9" },
];
const familyimages = [
  { id: 1, src: Family, alt: "SoftNova Academy Family 1" },
];

const htmlClassImages = [
  { id: 1, src: htmlClass1, alt: "SoftNova Academy HTML Class 1" },
  { id: 2, src: htmlClass2, alt: "SoftNova Academy HTML Class 2" },
  { id: 3, src: htmlClass3, alt: "SoftNova Academy HTML Class 3" },
  { id: 4, src: htmlClass4, alt: "SoftNova Academy HTML Class 4" },
  { id: 5, src: htmlClass5, alt: "SoftNova Academy HTML Class 5" },
  { id: 6, src: htmlClass6, alt: "SoftNova Academy HTML Class 6" },
  { id: 7, src: htmlClass7, alt: "SoftNova Academy HTML Class 7" },
  { id: 8, src: htmlClass8, alt: "SoftNova Academy HTML Class 8" },
  { id: 9, src: htmlClass9, alt: "SoftNova Academy HTML Class 9" },
  { id: 10, src: htmlClass12, alt: "SoftNova Academy HTML Class 10" },
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLightboxVisible, setIsLightboxVisible] = useState(false);

  const openLightbox = (image) => {
    setSelectedImage(image);
    requestAnimationFrame(() => setIsLightboxVisible(true));
  };

  const closeLightbox = () => {
    setIsLightboxVisible(false);
    window.setTimeout(() => setSelectedImage(null), 250);
  };

  useEffect(() => {
    if (!selectedImage) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeLightbox();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a0a]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-600/50 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-3 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {/* Our Online Classes */}
        <section
          className="mb-16 text-center sm:mb-20"
          data-aos="zoom-in"
          data-aos-duration="700"
        >
          <h1
            className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl"
            data-aos="fade-down"
            data-aos-duration="600"
          >
            Our <span className="text-red-500">Online Classes</span>
          </h1>

          <p
            className="mx-auto mt-6 max-w-4xl text-xl font-semibold leading-snug tracking-tight text-white sm:text-2xl md:text-3xl lg:text-4xl"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"
          >
            Our online HTML classes will be start {" "}
            <span className="font-bold text-red-500 text-5xl">very soon </span>
          </p>

          {/* HTML Classes images */}
          <div className="mt-10 grid grid-cols-1 gap-5 text-left sm:mt-12 sm:gap-6 md:grid-cols-2">
            {htmlClassImages.map((image, index) => (
              <button
                key={image.id}
                type="button"
                onClick={() => openLightbox(image)}
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay={Math.min(index * 60, 240)}
                className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-gray-900/50 text-left shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-red-500/40 hover:shadow-red-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                aria-label={`Open ${image.alt}`}
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-gray-800">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/35" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Our SoftNova Family */}
        <section
          className="mb-16 sm:mb-20"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <div className="mb-10 text-center sm:mb-12">
            <h2
              className="text-3xl font-bold text-white sm:text-4xl md:text-5xl"
              data-aos="fade-down"
              data-aos-duration="600"
            >
              Our SoftNova <span className="text-red-500">Family</span>
            </h2>

            <p
              className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg md:text-xl"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="600"
            >
              Highlights from SoftNova Academy meetings and team gatherings.
            </p>
          </div>

         <div className="flex justify-center">
  {familyimages.map((image) => (
    <button
      key={image.id}
      type="button"
      onClick={() => openLightbox(image)}
      data-aos="zoom-in"
      data-aos-duration="700"
      className="group relative w-full max-w-4xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-gray-900/50 text-left shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-red-500/40 hover:shadow-red-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
      aria-label={`Open ${image.alt}`}
    >
      <div className="relative overflow-hidden">
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          className="h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/35" />
      </div>
    </button>
  ))}
</div>
        </section>

        {/* Our Meetings */}
        <section data-aos="fade-up" data-aos-duration="700">
          <div className="mb-10 text-center sm:mb-12">
            <h2
              className="text-3xl font-bold text-white sm:text-4xl md:text-5xl"
              data-aos="fade-down"
              data-aos-duration="600"
            >
              Our <span className="text-red-500">Meetings</span>
            </h2>

            <p
              className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="600"
            >
              Highlights from SoftNova Academy meetings and team gatherings.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
            {meetingImages.map((image, index) => (
              <button
                key={image.id}
                type="button"
                onClick={() => openLightbox(image)}
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay={Math.min(index * 60, 240)}
                className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-gray-900/50 text-left shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-red-500/40 hover:shadow-red-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                aria-label={`Open ${image.alt}`}
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-gray-800">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/35" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
                </div>
              </button>
            ))}
          </div>
        </section>
      </div>

      {/* Lightbox / Modal */}
      {selectedImage && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 sm:p-6 ${
            isLightboxVisible ? "opacity-100" : "opacity-0"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Meeting image preview"
          onClick={closeLightbox}
        >
          <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />

          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-20 rounded-full border border-white/15 bg-black/70 p-2.5 text-white transition hover:border-red-500/50 hover:bg-red-600 sm:right-6 sm:top-6"
            aria-label="Close image preview"
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          <div
            className={`relative z-10 max-h-[88vh] w-full max-w-5xl overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#111111] shadow-2xl transition-all duration-300 ${
              isLightboxVisible
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-3 scale-95 opacity-0"
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[88vh] w-full object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
}

export default Gallery;