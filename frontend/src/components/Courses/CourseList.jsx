import React from "react";
import CourseCard from "./CourseCard";

function CourseList({ courses }) {
  return (
    <section
      style={{
        display: "flex",
        gap: "1rem",
        overflowX: "auto",
        paddingBottom: "0.75rem",
        scrollSnapType: "x mandatory",
      }}
    >
      {courses.map((course) => (
        <div key={course.id} style={{ scrollSnapAlign: "start", flex: "0 0 280px" }}>
          <CourseCard course={course} />
        </div>
      ))}
    </section>
  );
}

export default CourseList;
