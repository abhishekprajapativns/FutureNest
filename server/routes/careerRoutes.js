const express = require("express");
const Career = require("../models/Career");

// A router holds a group of related URLs
const router = express.Router();

// When someone opens /api/careers, send all careers
router.get("/", async (req, res) => {
  const careers = await Career.find();
  res.json(careers);
});

module.exports = router;
