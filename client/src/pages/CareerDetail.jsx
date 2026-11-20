import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { API_URL } from "../config";

function CareerDetail() {
  // Get the career id from the link
  const { careerId } = useParams();

  const [career, setCareer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Run when the page opens: ask the server for this one career
  useEffect(() => {
    fetch(`${API_URL}/api/careers/${careerId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setError("Career not found.");
        } else {
          setCareer(data);
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Could not load this career. Please try again later.");
        setLoading(false);
      });
  }, [careerId]);

  if (loading) {
    return <p className="p-6 text-center text-gray-500">Loading...</p>;
  }

  if (error) {
    return <p className="p-6 text-center text-red-500">{error}</p>;
  }

  return (
    <main className="mx-auto max-w-2xl px-6 py-10">
      <h1 className="font-heading text-4xl font-bold text-teal-700">
        {career.name}
      </h1>
      <p className="mt-3 text-lg text-gray-700">{career.description}</p>

      {/* How to start card */}
      <div className="mt-8 rounded-2xl border border-orange-100 bg-white p-6">
        <h2 className="font-heading text-xl font-bold text-slate-900">
          How to start
        </h2>
        <p className="mt-2 text-gray-700">{career.path}</p>
      </div>

      {/* These three show only if the career has this data */}
      {career.eligibility && (
        <div className="mt-4 rounded-2xl border border-orange-100 bg-white p-6">
          <h2 className="font-heading text-xl font-bold text-slate-900">
            Eligibility
          </h2>
          <p className="mt-2 text-gray-700">{career.eligibility}</p>
        </div>
      )}

      {career.exams && (
        <div className="mt-4 rounded-2xl border border-orange-100 bg-white p-6">
          <h2 className="font-heading text-xl font-bold text-slate-900">
            Exams
          </h2>
          <p className="mt-2 text-gray-700">{career.exams}</p>
        </div>
      )}

      {career.salary && (
        <div className="mt-4 rounded-2xl border border-orange-100 bg-white p-6">
          <h2 className="font-heading text-xl font-bold text-slate-900">
            Salary
          </h2>
          <p className="mt-2 text-gray-700">{career.salary}</p>
        </div>
      )}
      <Link
        to="/"
        className="mt-8 inline-block rounded-xl bg-orange-700 px-6 py-3 font-bold text-white"
      >
        Back to home
      </Link>
    </main>
  );
}

export default CareerDetail;
