const express = require("express");
const router = express.Router();
const User = require("../Model/User");
const Post = require("../Model/Post");

// GET /api/profile/:username
router.get("/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) return res.status(404).json({ msg: "User not found" });

    const posts = await Post.find({ userId: user._id });

    res.json({ user, posts });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
