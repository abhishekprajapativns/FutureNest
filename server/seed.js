// Read the .env file
require("dotenv").config();

const mongoose = require("mongoose");
const Career = require("./models/Career");

// The list of careers we want to save
const careers = [
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
  {
    id: 4,
    name: "UI/UX Designer",
    tag: "creative",
    classes: ["10", "12", "graduation"],
    description: "Designs how apps and websites look and feel to use.",
    path: "Learn design tools like Figma, build a portfolio, and consider a design course or degree.",
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
  {
    id: 7,
    name: "Doctor",
    tag: "people",
    classes: ["10", "12"],
    description: "Diagnoses illness and treats patients.",
    path: "Take Science with Biology in 11th-12th, then prepare for NEET for MBBS.",
  },
  {
    id: 8,
    name: "Teacher",
    tag: "people",
    classes: ["12", "graduation"],
    description: "Teaches students and helps them grow.",
    path: "Complete graduation in your subject, then do B.Ed and prepare for teaching exams.",
  },
  {
    id: 9,
    name: "Psychologist",
    tag: "people",
    classes: ["12", "graduation"],
    description: "Helps people with their thoughts, feelings and behaviour.",
    path: "Do a degree in Psychology, then a master's and the required training.",
  },
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
    classes: ["12", "graduation"],
    description: "Starts and runs their own business.",
    path: "Learn business basics, start small, and gain real experience. A BBA or MBA can help.",
  },
  {
    id: 12,
    name: "Marketing Manager",
    tag: "business",
    classes: ["12", "graduation"],
    description: "Plans how to promote products and reach customers.",
    path: "Do a BBA or similar degree, learn digital marketing, and practice with real projects.",
  },
  {
    id: 13,
    name: "Web Developer",
    tag: "tech",
    classes: ["10", "12", "graduation"],
    description: "Builds and maintains websites that people use every day.",
    path: "Learn HTML, CSS and JavaScript, build projects, and consider BCA or B.Tech.",
  },
  {
    id: 14,
    name: "Electrician (ITI)",
    tag: "tech",
    classes: ["10"],
    description: "Installs and repairs electrical wiring and machines.",
    path: "Do an ITI course in the Electrician trade after 10th, then work or take an apprenticeship.",
  },
  {
    id: 15,
    name: "Mechanical Engineer",
    tag: "tech",
    classes: ["10", "12"],
    description: "Designs and improves machines, engines and tools.",
    path: "Take Science with Maths in 11th-12th, then prepare for JEE and do B.Tech.",
  },
  {
    id: 16,
    name: "AI / ML Engineer",
    tag: "tech",
    classes: ["12", "graduation"],
    description: "Builds smart programs that learn from data.",
    path: "Learn Python and maths, do B.Tech or BCA, then build machine learning projects.",
  },
  {
    id: 17,
    name: "Animator",
    tag: "creative",
    classes: ["10", "12", "graduation"],
    description:
      "Creates moving characters and scenes for films, games and ads.",
    path: "Learn drawing and animation software, then do a diploma or degree in animation.",
  },
  {
    id: 18,
    name: "Fashion Designer",
    tag: "creative",
    classes: ["10", "12"],
    description: "Designs clothes and accessories.",
    path: "Do a diploma or degree in fashion design, and prepare for entrance exams like NIFT after 12th.",
  },
  {
    id: 19,
    name: "Journalist",
    tag: "creative",
    classes: ["12", "graduation"],
    description: "Finds, writes and reports news and stories.",
    path: "Do a degree in journalism or mass communication, practice writing, and try internships.",
  },
  {
    id: 20,
    name: "Nurse",
    tag: "people",
    classes: ["10", "12"],
    description: "Takes care of patients and helps doctors in hospitals.",
    path: "Take Science with Biology, then do B.Sc Nursing or GNM.",
  },
  {
    id: 21,
    name: "Social Worker",
    tag: "people",
    classes: ["12", "graduation"],
    description: "Helps people and communities solve social problems.",
    path: "Do BSW or MSW, and gain experience by volunteering with NGOs.",
  },
  {
    id: 22,
    name: "Civil Services Officer",
    tag: "people",
    classes: ["graduation"],
    description: "Works in government to run public services and policies.",
    path: "Complete graduation in any subject, then prepare for the UPSC exams.",
  },
  {
    id: 23,
    name: "Banker",
    tag: "business",
    classes: ["12", "graduation"],
    description: "Works in banks to manage money, loans and customer accounts.",
    path: "Complete graduation, then prepare for banking exams like IBPS and SBI.",
  },
  {
    id: 24,
    name: "Accountant",
    tag: "business",
    classes: ["10", "12", "graduation"],
    description: "Keeps records of money, bills and taxes for businesses.",
    path: "Take Commerce, do B.Com, and learn Tally and GST.",
  },
];

// This function saves the careers in the database
async function seed() {
  // 1. Connect to the database
  await mongoose.connect(process.env.MONGO_URI);

  // 2. Delete old careers, so we do not get duplicates
  await Career.deleteMany({});

  // 3. Save all careers
  await Career.insertMany(careers);

  console.log("Careers saved:", careers.length);

  // 4. Stop the script
  process.exit();
}

// Run the function
seed();
