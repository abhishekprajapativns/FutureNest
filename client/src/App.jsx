import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import CareerDetail from "./pages/CareerDetail";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/quiz/:classId" element={<Quiz />} />

        <Route path="/career/:careerId" element={<CareerDetail />} />

        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
