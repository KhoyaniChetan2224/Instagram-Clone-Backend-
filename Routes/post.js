const express = require("express");
const router = express.Router();
const Post = require("../../Model/Post");

router.post("/", async (req, res) => {
  const { caption, imageUrl, userId } = req.body;
  const posts = await Post.find().sort({ _id: -1 });
  res.json(posts);

  if (!caption || !imageUrl || !userId) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const newPost = new Post({ caption, imageUrl, userId });
  await newPost.save();
  res.status(201).json({ message: "Post created", post: newPost });
  
});

router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    await newPost.save();
    res.status(201).json(newPost);
  });

module.exports = router;