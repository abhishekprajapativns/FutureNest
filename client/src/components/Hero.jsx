import { useState } from "react";
import { useNavigate } from "react-router-dom";

// The three stages. The id is used in the quiz link.
const stages = [
  { id: "10", label: "After 10th" },
  { id: "12", label: "After 12th" },
  { id: "graduation", label: "After Graduation" },
];

// Example items shown in the roadmap card
const roadmapExample = [
  "Interest: Technology",
  "Stream: Science (PCM)",
  "Exam: JEE / CUET",
  "College: Top engineering colleges",
  "Career: Software Engineer",
];

function Hero() {
  // Which stage the student picked (null = nothing yet)
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-12 md:grid-cols-2 md:px-12 md:py-20">
      {/* Left side: text and stage buttons */}
      <div>
        <span className="inline-block rounded-full bg-orange-100 px-4 py-1 text-sm text-orange-800">
          Free career guidance for students
        </span>

        <h1 className="font-heading mt-5 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
          Not sure what to do next? Find a career that{" "}
          <span className="text-orange-700">fits you.</span>
        </h1>

        <p className="mt-5 text-lg text-gray-600">
          Get a clear path of courses, exams and careers based on your stage,
          interests and strengths.
        </p>

        <p className="mt-8 text-sm font-bold text-slate-900">
          Select your education stage
        </p>

        <div className="mt-3 flex flex-wrap gap-3">
          {stages.map((stage) => (
            <button
              key={stage.id}
              onClick={() => setSelected(stage.id)}
              className={`rounded-xl border-2 border-teal-700 px-5 py-2 font-medium ${
                selected === stage.id
                  ? "bg-teal-700 text-white"
                  : "bg-white text-teal-700"
              }`}
            >
              {stage.label}
            </button>
          ))}
        </div>

        {/* Disabled until a stage is chosen */}
        <button
          disabled={!selected}
          onClick={() => navigate(`/quiz/${selected}`)}
          className="mt-5 rounded-xl bg-orange-700 px-7 py-3 font-bold text-white disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          Explore Careers
        </button>
      </div>

      {/* Right side: example roadmap card */}
      <div className="rounded-3xl bg-teal-100 p-6 md:p-8">
        <div className="rounded-2xl bg-white p-6 shadow">
          <h2 className="font-heading text-lg font-bold">
            Your Personalized Roadmap
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Example: After 12th, interested in technology
          </p>

          <ul className="mt-4 grid gap-3">
            {roadmapExample.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="h-3 w-3 shrink-0 rounded-full bg-teal-700"></span>
                <span className="flex-1 rounded-lg bg-gray-100 px-4 py-2 text-sm">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;
