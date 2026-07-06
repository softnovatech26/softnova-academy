export const courses = [
  {
    id: "web-development",
    title: "Web Development",
    slug: "web-development",
    description:
      "Build responsive websites and modern web applications with hands-on projects.",
    level: "Beginner to Advanced",
    duration: "8 weeks",
  },
  {
    id: "python-programming",
    title: "Python Programming",
    slug: "python-programming",
    description:
      "Learn Python fundamentals, automation, APIs, and data-focused projects.",
    level: "Beginner",
    duration: "6 weeks",
  },
  {
    id: "artificial-intelligence",
    title: "Artificial Intelligence",
    slug: "artificial-intelligence",
    description:
      "Explore machine learning, neural networks, and AI-powered solutions.",
    level: "Intermediate",
    duration: "10 weeks",
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    slug: "machine-learning",
    description:
      "Understand algorithms, model building, and practical AI applications.",
    level: "Intermediate",
    duration: "8 weeks",
  },
  {
    id: "data-science",
    title: "Data Science",
    slug: "data-science",
    description:
      "Analyze data, build insights, and work with real-world datasets.",
    level: "Intermediate",
    duration: "8 weeks",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    slug: "ui-ux-design",
    description:
      "Design intuitive user journeys and polished interfaces for digital products.",
    level: "Intermediate",
    duration: "7 weeks",
  },
];

export const getCourseBySlug = (slug) =>
  courses.find((course) => course.slug === slug);
