const mongoose = require("mongoose");

// Shape of one career document in MongoDB
const careerSchema = new mongoose.Schema({
  id: Number,
  name: String,
  tag: String,
  classes: [String],
  description: String,
  path: String,
  eligibility: String,
  exams: String,
  salary: String,
});

module.exports = mongoose.model("Career", careerSchema);
