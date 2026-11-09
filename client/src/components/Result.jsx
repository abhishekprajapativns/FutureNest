import careers from "../data/careers";

// Friendly names for each tag, shown to the student
const interestNames = {
  tech: "Technology",
  creative: "Creativity and Design",
  people: "Helping People",
  business: "Business and Finance",
};

function Result({ answers, classId }) {
  const counts = { tech: 0, creative: 0, people: 0, business: 0 };

  answers.forEach((tag) => {
    counts[tag] = counts[tag] + 1;
  });

  let topTag = "tech";
  for (const tag in counts) {
    if (counts[tag] > counts[topTag]) {
      topTag = tag;
    }
  }

  // Keep only the careers that match the top interest
  const matchedCareers = careers.filter(
    (career) => career.tag === topTag && career.classes.includes(classId),
  );

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

      {/* Show the matching careers */}
      <h2 className="text-2xl font-bold mt-10 mb-4">Careers for you</h2>
      <div className="grid gap-4 text-left">
        {matchedCareers.map((career) => (
          <div
            key={career.id}
            className="border border-gray-300 rounded-xl p-5"
          >
            <h3 className="text-lg font-bold text-blue-600">{career.name}</h3>
            <p className="text-gray-700 mt-1">{career.description}</p>
            <p className="text-sm text-gray-500 mt-3">
              <span className="font-medium">How to start: </span>
              {career.path}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Result;
