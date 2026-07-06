import React from "react";
import { Link } from "react-router-dom";

function CourseCard({ course }) {
  return (
    <Link
      to={`/courses/${course.slug}`}
      style={{
        display: "block",
        width: "100%",
        minHeight: "180px",
        padding: "1.25rem",
        border: "1px solid #e2e8f0",
        borderRadius: "12px",
        textDecoration: "none",
        color: "inherit",
        background: "#fff",
        boxShadow: "0 8px 24px rgba(15, 23, 42, 0.08)",
      }}
    >
      <h3 style={{ margin: "0 0 0.5rem" }}>{course.title}</h3>
      <p style={{ margin: "0 0 0.75rem", color: "#475569" }}>{course.description}</p>
      <small style={{ color: "#2563eb" }}>
        {course.level} · {course.duration}
      </small>
    </Link>
  );
}

export default CourseCard;
