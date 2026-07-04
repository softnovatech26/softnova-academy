import React, { useState } from "react";
import { Link } from "react-router-dom";

function CourseSlider({ courses }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentCourse = courses[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? courses.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === courses.length - 1 ? 0 : prev + 1));
  };

  if (!currentCourse) return null;

  return (
    <section style={{ maxWidth: "480px", margin: "0 auto", textAlign: "center" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "1rem" }}>
        <button onClick={goToPrevious} aria-label="Previous course" style={{ padding: "0.5rem 0.9rem" }}>
          ←
        </button>
        <Link
          to={`/courses/${currentCourse.slug}`}
          style={{
            display: "inline-block",
            padding: "1rem 1.5rem",
            borderRadius: "999px",
            background: "#2563eb",
            color: "#fff",
            textDecoration: "none",
            fontWeight: 600,
            minWidth: "220px",
          }}
        >
          {currentCourse.title}
        </Link>
        <button onClick={goToNext} aria-label="Next course" style={{ padding: "0.5rem 0.9rem" }}>
          →
        </button>
      </div>
      <p style={{ color: "#475569", margin: 0 }}>Click the course name to open its details.</p>
    </section>
  );
}

export default CourseSlider;
