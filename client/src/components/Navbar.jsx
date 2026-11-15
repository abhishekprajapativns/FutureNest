import { Link } from "react-router-dom";
function Navbar() {
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

        <span className="text-gray-500"></span>
      </div>
    </nav>
  );
}

export default Navbar;
