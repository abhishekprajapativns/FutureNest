import { useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../config";

function Login() {
  // What the student types in each box
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // A message if something goes wrong, and a flag while we wait
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    // Stop the page from reloading
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Send the email and password to our server
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (!res.ok) {
        // The server said no (for example: wrong password)
        setError(data.message);
        setLoading(false);
        return;
      }

      // Save the token and user in the browser, so we remember the login
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Go to the home page. This reloads the page, so the Navbar updates.
      window.location.href = "/";
    } catch (err) {
      setError("Could not reach the server. Please try again later.");
      setLoading(false);
    }
  }

  return (
    <main className="grid min-h-[70vh] md:grid-cols-2">
      {/* Left side: green panel (hidden on small phones) */}
      <div className="hidden bg-gradient-to-b from-teal-700 to-teal-800 p-12 text-white md:flex md:flex-col md:justify-center">
        <p className="font-heading text-3xl font-bold">FutureNest</p>
        <h1 className="font-heading mt-8 text-5xl font-bold leading-tight">
          Welcome back
        </h1>
        <p className="mt-6 text-lg text-teal-50">
          Log in to continue your career journey and see your saved results.
        </p>
      </div>

      {/* Right side: the form */}
      <div className="flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <h2 className="font-heading text-4xl font-bold text-slate-900">
            Log in to your account
          </h2>
          <p className="mt-3 text-gray-600">
            New here?{" "}
            <Link to="/signup" className="font-bold text-teal-700">
              Create an account
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
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
              {loading ? "Logging in..." : "Log in"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Login;
