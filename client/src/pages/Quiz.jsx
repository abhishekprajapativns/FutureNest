import { useState } from "react";
import { useParams } from "react-router-dom";
import questions from "../data/questions";
import Result from "../components/Result";

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
  // We send the chosen answers to it as props
  if (current >= questions.length) {
    return <Result answers={answers} classId={classId} />;
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
