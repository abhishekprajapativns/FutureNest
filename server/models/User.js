const mongoose = require("mongoose");

// Shape of one user in MongoDB
const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true, // no two users can have the same email
    lowercase: true, // save emails in small letters
  },
  password: {
    type: String,
    required: true, // this will be the hashed password, never the real one
  },
});

module.exports = mongoose.model("User", userSchema);
