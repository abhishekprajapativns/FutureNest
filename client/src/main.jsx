import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// BrowserRouter makes page switching (routing) work in the whole app
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Everything inside BrowserRouter can use routing */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
