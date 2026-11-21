import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  // What the student types in each box
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    // Stop the page from reloading
    e.preventDefault();

    // The backend is not ready yet, so we only print name and email
    console.log({ name, email });
  }

  return (
    <main className="grid min-h-[85vh] md:grid-cols-2">
      {/* Left side: green panel (hidden on small phones) */}

      <div className="hidden bg-gradient-to-b from-teal-700 to-teal-800 p-16 text-white md:flex md:flex-col md:justify-center">
        <p className="font-heading text-3xl font-bold">FutureNest</p>
        <h1 className="font-heading mt-8 text-5xl font-bold leading-tight">
          Your career roadmap, saved in one place
        </h1>
        <p className="mt-6 text-lg text-teal-50">
          Create a free account to take the career test and save your results.
        </p>
      </div>

      {/* Right side: the form */}
      <div className="flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <h2 className="font-heading text-4xl font-bold text-slate-900">
            Create your account
          </h2>
          <p className="mt-3 text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="font-bold text-teal-700">
              Log in
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Full name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full rounded-2xl border-2 border-orange-100 bg-white px-5 py-4"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-2xl border-2 border-orange-100 bg-white px-5 py-4"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium"
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
                className="w-full rounded-2xl border-2 border-orange-100 bg-white px-5 py-4"
              />
            </div>

            <button
              type="submit"
              className="rounded-2xl bg-teal-700 py-4 text-lg font-bold text-white hover:bg-teal-800"
            >
              Sign up
            </button>

            {/* Google login will be added later */}
            <button
              type="button"
              disabled
              className="rounded-2xl border-2 border-orange-100 bg-white py-4 font-bold text-gray-400"
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
