const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
    caption: String,
    imageUrl: String,
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    userId: mongoose.Schema.Types.ObjectId,
    image: String,
    caption: String,
    createdAt: { type: Date, default: Date.now }
  });
module.exports = mongoose.model("Post", postSchema);

