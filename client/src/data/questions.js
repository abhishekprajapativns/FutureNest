// A list of quiz questions
// Each answer has a "tag" that tells which interest it belongs to
const questions = [
  {
    id: 1,
    text: "Which kind of work do you enjoy the most?",
    options: [
      { text: "Solving problems using logic", tag: "tech" },
      { text: "Creating new designs and ideas", tag: "creative" },
      { text: "Helping other people", tag: "people" },
      { text: "Managing money and business", tag: "business" },
    ],
  },
  {
    id: 2,
    text: "What do you do in your free time?",
    options: [
      { text: "Play with coding or gadgets", tag: "tech" },
      { text: "Draw, make videos or music", tag: "creative" },
      { text: "Help friends or do social work", tag: "people" },
      { text: "Sell things or track expenses", tag: "business" },
    ],
  },
  {
    id: 3,
    text: "Which subject do you like the most?",
    options: [
      { text: "Maths or Computer", tag: "tech" },
      { text: "Art or Languages", tag: "creative" },
      { text: "Biology or Social Science", tag: "people" },
      { text: "Economics or Accounts", tag: "business" },
    ],
  },
  {
    id: 4,
    text: "How do you like to work?",
    options: [
      { text: "Alone on a tough problem", tag: "tech" },
      { text: "Freely, with my own ideas", tag: "creative" },
      { text: "In a team with many people", tag: "people" },
      { text: "With clear targets and goals", tag: "business" },
    ],
  },
  {
    id: 5,
    text: "What matters most to you in a future job?",
    options: [
      { text: "Learning new technology", tag: "tech" },
      { text: "Expressing my creativity", tag: "creative" },
      { text: "Making a difference in society", tag: "people" },
      { text: "Earning well and growing fast", tag: "business" },
    ],
  },
];

// export lets other files use this list
export default questions;
