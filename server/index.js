// Bring the tools we installed earlier
const express = require("express");
const cors = require("cors");

// dotenv reads secret values from the .env file
require("dotenv").config();
const mongoose = require("mongoose");

// Create the app
const app = express();

// cors lets our React app talk to this server
app.use(cors());
// This lets the server read JSON data sent to it
app.use(express.json());

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB error:", err.message));

// A test route: when someone opens "/", send this message
app.get("/", (req, res) => {
  res.send("FutureNest API is running");
});

// Use the port from .env, or 5000 if it is missing
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
