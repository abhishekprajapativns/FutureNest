import { useState } from "react";
import { useParams } from "react-router-dom";
import questions from "../data/questions";

// Friendly names for each tag, shown to the student
const interestNames = {
  tech: "Technology",
  creative: "Creativity and Design",
  people: "Helping People",
  business: "Business and Finance",
};

function Quiz() {
  // Get the class value from the link
  const { classId } = useParams();
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);

  function handleAnswer(tag) {
    setAnswers([...answers, tag]);
    setCurrent(current + 1);
  }

  // If all questions are done, show a finished message

  if (current >= questions.length) {
    // start every counter from 0
    const counts = { tech: 0, creative: 0, people: 0, business: 0 };

    //add 1 to the counter of each chosen tag
    answers.forEach((tag) => {
      counts[tag] = counts[tag] + 1;
    });

    //find the tag with the highest counter

    let topTag = "tech";
    for (const tag in counts) {
      if (counts[tag] > counts[topTag]) {
        topTag = tag;
      }
    }

    return (
      <main className="max-w-2xl mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold mt-10">Quiz finished!</h1>
        <p className="text-gray-600 mt-3">Your strongest interest is</p>
        <p className="text-2xl font-bold text-blue-600 mt-1">
          {interestNames[topTag]}
        </p>

        {/* Show the score of every interest */}
        <div className="mt-8 text-left grid gap-2">
          {Object.keys(counts).map((tag) => (
            <div
              key={tag}
              className="flex justify-between border border-gray-200 rounded-lg p-3"
            >
              <span>{interestNames[tag]}</span>
              <span className="font-medium">{counts[tag]}</span>
            </div>
          ))}
        </div>
      </main>
    );
  }

  // Pick the current question from the list

  const question = questions[current];

  return (
    <main className="max-w-2xl mx-auto p-6">
      {/* Small info: class and question number */}
      <p className="text-sm text-gray-500 mb-2">
        Class: {classId} | Question {current + 1} of {questions.length}
      </p>

      {/* The question */}
      <h1 className="text-2xl font-bold mb-6">{question.text}</h1>

      {/* Show one button for each option */}

      <div className="grid gap-3">
        {question.options.map((option) => (
          <button
            key={option.text}
            onClick={() => handleAnswer(option.tag)}
            className="border border-gray-300 rounded-xl p-4 text-left hover:border-blue-600 hover:text-blue-600"
          >
            {option.text}
          </button>
        ))}
      </div>
    </main>
  );
}

export default Quiz;
