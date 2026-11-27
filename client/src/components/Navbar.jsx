import { Link } from "react-router-dom";

function Navbar() {
  // Read the saved user from the browser (null if nobody is logged in)
  const savedUser = localStorage.getItem("user");
  const user = savedUser ? JSON.parse(savedUser) : null;

  function handleLogout() {
    // Forget the token and user, then reload the home page
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  }

  return (
    <nav className="flex items-center justify-between border-b border-orange-100 px-6 py-4 md:px-12">
      {/* Logo: click to go home */}

      <Link to="/" className="font-heading text-2xl font-bold text-teal-700">
        FutureNest
      </Link>

      {/* Links */}

      <div className="flex items-center gap-6 text-sm font-medium">
        <Link to="/" className="text-teal-700">
          Home
        </Link>

        {user ? (
          <>
            <span className="text-slate-700">Hi, {user.name}</span>
            <button
              onClick={handleLogout}
              className="rounded-xl bg-teal-700 px-4 py-2 text-white hover:bg-teal-800"
            >
              Log out
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-teal-700">
              Log in
            </Link>

            <Link
              to="/signup"
              className="rounded-xl bg-teal-700 px-4 py-2 text-white hover:bg-teal-800"
            >
              Sign up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
