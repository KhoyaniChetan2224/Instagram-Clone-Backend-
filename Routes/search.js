const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Post = require("../models/Post");

router.get("/", async (req, res) => {
  const query = req.query.q;
  if (!query) return res.json({ users: [], posts: [] });

  const users = await User.find({
    username: { $regex: query, $options: "i" }
  }).limit(10);

  const posts = await Post.find({
    caption: { $regex: query, $options: "i" }
  }).limit(10);

  res.json({ users, posts });
});

module.exports = router;
