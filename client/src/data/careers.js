// A list of careers
// "tag" connects a career to the quiz result
// "path" is a short guide on what to study

const careers = [
  // Technology
  {
    id: 1,
    name: "Software Developer",
    tag: "tech",
    classes: ["10", "12", "graduation"],
    description: "Builds websites, apps and software for people to use.",
    path: "Learn programming, then do BCA, B.Tech or build projects and a portfolio.",
  },
  {
    id: 2,
    name: "Data Analyst",
    tag: "tech",
    classes: ["10", "12", "graduation"],
    description: "Studies data to find useful patterns and help in decisions.",
    path: "Learn Excel, SQL and Python, then do a degree in IT, Maths or Statistics.",
  },
  {
    id: 3,
    name: "Cyber Security Expert",
    tag: "tech",
    classes: ["10", "12", "graduation"],
    description: "Protects computers and networks from online attacks.",
    path: "Learn networking and security basics, then do B.Tech or BCA with certifications.",
  },

  // Creativity and Design
  {
    id: 4,
    name: "UI/UX Designer",
    tag: "creative",
    classes: ["10", "12", "graduation"],
    description: "Designs how apps and websites look and feel to use.",
    path: "Learn design tools like Figma, build a portfolio, and consider a design degree.",
  },
  {
    id: 5,
    name: "Graphic Designer",
    tag: "creative",
    classes: ["10", "12", "graduation"],
    description: "Creates posters, logos and visuals for brands.",
    path: "Learn design software, practice daily, and consider a design course or degree.",
  },
  {
    id: 6,
    name: "Content Creator",
    tag: "creative",
    classes: ["10", "12", "graduation"],
    description: "Makes videos, writing or audio content for an audience.",
    path: "Pick a topic you love, create regularly, and learn editing and storytelling.",
  },

  // Helping People
  {
    id: 7,
    name: "Doctor",
    tag: "people",
    classes: ["10", "12", "graduation"],
    description: "Diagnoses illness and treats patients.",
    path: "Take Science with Biology in 11th-12th, then prepare for NEET for MBBS.",
  },
  {
    id: 8,
    name: "Teacher",
    tag: "people",
    classes: ["10", "12", "graduation"],
    description: "Teaches students and helps them grow.",
    path: "Complete graduation in your subject, then do B.Ed and prepare for teaching exams.",
  },
  {
    id: 9,
    name: "Psychologist",
    tag: "people",
    classes: ["10", "12", "graduation"],
    description: "Helps people with their thoughts, feelings and behaviour.",
    path: "Do a degree in Psychology, then a master's and the required training.",
  },

  // Business and Finance
  {
    id: 10,
    name: "Chartered Accountant",
    tag: "business",
    classes: ["10", "12", "graduation"],
    description: "Handles accounts, taxes and audits for people and companies.",
    path: "Take Commerce, then prepare for the CA exams through ICAI.",
  },
  {
    id: 11,
    name: "Entrepreneur",
    tag: "business",
    classes: ["10", "12", "graduation"],
    description: "Starts and runs their own business.",
    path: "Learn business basics, start small, and gain real experience. A BBA or MBA can help.",
  },
  {
    id: 12,
    name: "Marketing Manager",
    tag: "business",
    classes: ["10", "12", "graduation"],
    description: "Plans how to promote products and reach customers.",
    path: "Do a BBA or similar degree, learn digital marketing, and practice with real projects.",
  },
];

export default careers;
