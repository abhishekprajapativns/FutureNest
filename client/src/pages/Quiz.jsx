import { useState } from "react";
import { useParams } from "react-router-dom";
import questions from "../data/questions";
import Result from "../components/Result";

// Friendly names for the class shown at the top
const classNames = {
  10: "After 10th",
  12: "After 12th",
  graduation: "After Graduation",
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

  // If all questions are done, show the result
  if (current >= questions.length) {
    return <Result answers={answers} classId={classId} />;
  }

  // Pick the current question from the list
  const question = questions[current];

  // How much of the quiz is done, in percent
  const percent = (current / questions.length) * 100;

  return (
    <main className="max-w-2xl mx-auto p-6">
      {/* Small info: class and question number */}
      <p className="text-sm text-gray-600">
        {classNames[classId] || classId} · Question {current + 1} of{" "}
        {questions.length}
      </p>

      {/* Progress bar */}
      <div className="mt-2 h-2 rounded-full bg-orange-100">
        <div
          className="h-2 rounded-full bg-teal-700"
          style={{ width: `${percent}%` }}
        ></div>
      </div>

      {/* The question */}
      <h1 className="font-heading mt-8 mb-6 text-2xl font-bold text-slate-900 md:text-3xl">
        {question.text}
      </h1>

      {/* Show one button for each option */}
      <div className="grid gap-3">
        {question.options.map((option) => (
          <button
            key={option.text}
            onClick={() => handleAnswer(option.tag)}
            className="rounded-xl border border-orange-100 bg-white p-4 text-left hover:border-teal-700 hover:text-teal-700c"
          >
            {option.text}
          </button>
        ))}
      </div>
    </main>
  );
}

export default Quiz;
