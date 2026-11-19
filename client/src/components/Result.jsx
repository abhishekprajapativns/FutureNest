import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Friendly names for each tag, shown to the student
const interestNames = {
  tech: "Technology",
  creative: "Creativity and Design",
  people: "Helping People",
  business: "Business and Finance",
};

function Result({ answers, classId }) {
  // This list will hold careers that come from the database
  const [careers, setCareers] = useState([]);

  // true while we wait for the server
  const [loading, setLoading] = useState(true);

  // will hold a message if something goes wrong
  const [error, setError] = useState("");

  //Run once when the page opens: ask the server for careers

  useEffect(() => {
    fetch("http://localhost:5000/api/careers")
      .then((res) => res.json())
      .then((data) => {
        setCareers(data);
        setLoading(false); //data came, stop loading
      })

      .catch(() => {
        setError("Could not load careers. Please try again later.");
        setLoading(false);
      });
  }, []);

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
      <h1 className="font-heading text-3xl font-bold text-slate-900">
        Quiz finished!
      </h1>
      <p className="mt-3 text-gray-600">Your strongest interest is</p>
      <p className="font-heading mt-1 text-3xl font-bold text-teal-700">
        {interestNames[topTag]}
      </p>

      {/* Show the score of every interest */}
      <div className="mt-8 grid gap-2 text-left">
        {Object.keys(counts).map((tag) => (
          <div
            key={tag}
            className="flex justify-between rounded-xl border border-orange-100 bg-white p-3"
          >
            <span>{interestNames[tag]}</span>
            <span className="font-bold">{counts[tag]}</span>
          </div>
        ))}
      </div>

      {/* Show the matching careers */}
      <h2 className="font-heading mt-10 mb-4 text-2xl font-bold text-slate-900">
        Careers for you
      </h2>

      {loading && <p className="text-gray-500">Loading careers...</p>}

      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && matchedCareers.length === 0 && (
        <p className="text-gray-500">No careers found for this class yet.</p>
      )}

      <div className="grid gap-4 text-left">
        {matchedCareers.map((career) => (
          <Link
            to={`/career/${career.id}`}
            key={career._id}
            className="rounded-2xl border border-orange-100 bg-white p-5 hover:border-teal-700"
          >
            <h3 className="text-lg font-bold text-teal-700">{career.name}</h3>
            <p className="mt-1 text-gray-700">{career.description}</p>
            <p className="mt-3 text-sm text-gray-500">
              <span className="font-medium">How to start: </span>
              {career.path}
            </p>
          </Link>
        ))}
      </div>

      {/* Go back and take the quiz again */}
      <Link
        to="/"
        className="mt-8 inline-block rounded-xl bg-orange-700 px-6 py-3 font-bold text-white"
      >
        Take the quiz again
      </Link>
    </main>
  );
}

export default Result;
