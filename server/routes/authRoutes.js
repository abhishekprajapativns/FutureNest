const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// When the signup form is sent to /api/auth/signup
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 1. Check that nothing is empty
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please fill all the boxes" });
    }

    // 2. Check the password length
    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password must be at least 8 characters" });
    }

    // 3. Check if this email already has an account
    const oldUser = await User.findOne({ email: email.toLowerCase() });
    if (oldUser) {
      return res.status(400).json({ message: "This email is already used" });
    }

    // 4. Hide the password (hash it). 10 is how strong the hiding is.
    const hashedPassword = await bcrypt.hash(password, 10);

    // 5. Save the new user in the database
    const user = await User.create({ name, email, password: hashedPassword });

    // 6. Send back a success message (never send the password back)
    res.status(201).json({
      message: "Account created",
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong on the server" });
  }
});

// When the login form is sent to /api/auth/login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Check that nothing is empty
    if (!email || !password) {
      return res.status(400).json({ message: "Please fill all the boxes" });
    }

    // 2. Find the user by email
    const user = await User.findOne({ email: email.toLowerCase() });

    // 3. Compare the typed password with the hidden one in the database
    // (same message for wrong email and wrong password, so nobody can guess emails)
    const passwordIsRight = user
      ? await bcrypt.compare(password, user.password)
      : false;

    if (!passwordIsRight) {
      return res.status(400).json({ message: "Wrong email or password" });
    }

    // 4. Make a token that is valid for 7 days
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // 5. Send the token and basic user info (never the password)
    res.json({
      message: "Login successful",
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong on the server" });
  }
});

module.exports = router;
