const express = require("express");
const Career = require("../models/Career");

// A router holds a group of related URLs
const router = express.Router();

// When someone opens /api/careers, send all careers
router.get("/", async (req, res) => {
  const careers = await Career.find();
  res.json(careers);
});

// When someone opens /api/careers/7, send only the career with id 7
router.get("/:id", async (req, res) => {
  const career = await Career.findOne({ id: Number(req.params.id) });

  // If no career has this id, tell the client
  if (!career) {
    return res.status(404).json({ message: "Career not found" });
  }
  res.json(career);
});

module.exports = router;
