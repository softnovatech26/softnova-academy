import React from "react";
import { Link, useParams } from "react-router-dom";
import { getCourseBySlug } from "../data/courses";

function CourseDetails() {
  const { slug } = useParams();
  const course = getCourseBySlug(slug);

  if (!course) {
    return (
      <main style={{ padding: "2rem", minHeight: "100vh" }}>
        <h1>Course not found</h1>
        <Link to="/courses">Back to courses</Link>
      </main>
    );
  }

  return (
    <main style={{ padding: "2rem", minHeight: "100vh" }}>
      <Link to="/courses">← Back to courses</Link>
      <h1 style={{ marginTop: "1rem" }}>{course.title}</h1>
      <p>{course.description}</p>
      <p>
        <strong>Level:</strong> {course.level}
      </p>
      <p>
        <strong>Duration:</strong> {course.duration}
      </p>
    </main>
  );
}

export default CourseDetails;
