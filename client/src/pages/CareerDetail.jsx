import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function CareerDetail() {
  // Get the career id from the link
  const { careerId } = useParams();

  const [career, setCareer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Run when the page opens: ask the server for this one career
  useEffect(() => {
    fetch(`http://localhost:5000/api/careers/${careerId}`)
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
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-3">{career.name}</h1>
      <p className="text-gray-700 mb-6">{career.description}</p>

      <h2 className="text-xl font-semibold mb-2">How to start</h2>
      <p className="text-gray-700 mb-8">{career.path}</p>

      <Link to="/" className="text-blue-600 underline">
        Back to home
      </Link>
    </main>
  );
}

export default CareerDetail;