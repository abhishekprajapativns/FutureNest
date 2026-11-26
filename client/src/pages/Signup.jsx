import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../config";

function Signup() {
  // What the student types in each box
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // A message if something goes wrong, and a flag while we wait
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    // Stop the page from reloading
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Send the form data to our server
      const res = await fetch(`${API_URL}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();

      if (!res.ok) {
        // The server said no (for example: email already used)
        setError(data.message);
      } else {
        // Account created, go to the login page
        navigate("/login");
      }
    } catch (err) {
      setError("Could not reach the server. Please try again later.");
    }

    setLoading(false);
  }

  return (
    <main className="grid min-h-[70vh] md:grid-cols-2">
      {/* Left side: green panel (hidden on small phones) */}

      <div className="hidden bg-gradient-to-b from-teal-700 to-teal-800 p-12 text-white md:flex md:flex-col md:justify-center">
        <p className="font-heading text-2xl font-bold">FutureNest</p>
        <h1 className="font-heading mt-8 text-3xl font-bold leading-tight">
          Your career roadmap, saved in one place
        </h1>
        <p className="mt-6 text-base text-teal-50">
          Create a free account to take the career test and save your results.
        </p>
      </div>

      {/* Right side: the form */}
      <div className="flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-sm">
          <h2 className="font-heading text-4xl font-bold text-slate-900">
            Create your account
          </h2>
          <p className="mt-3 text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="font-bold text-teal-700">
              Log in
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium">
                Full name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full rounded-xl border border-orange-200 bg-white px-4 py-2"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-orange-200 bg-white px-4 py-2"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-1 block text-sm font-medium"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="At least 8 characters"
                className="w-full rounded-xl border border-orange-200 bg-white px-4 py-2"
              />
            </div>

            {/* Error message from the server */}
            {error && <p className="text-sm text-red-600">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-teal-700 py-2 font-bold text-white hover:bg-teal-800 disabled:bg-gray-400"
            >
              {loading ? "Creating account..." : "Sign up"}
            </button>

            {/* Google login will be added later */}
            <button
              type="button"
              disabled
              className="rounded-xl border border-orange-200 bg-white py-2 font-bold text-gray-400"
            >
              Continue with Google (coming soon)
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Signup;
