const mongoose = require("mongoose");

// Shape of one saved quiz result in MongoDB
const resultSchema = new mongoose.Schema({
  // Which user this result belongs to
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  classId: String, // "10", "12" or "graduation"
  topTag: String, // the strongest interest, like "tech"
  counts: {
    tech: Number,
    creative: Number,
    people: Number,
    business: Number,
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Result", resultSchema);
