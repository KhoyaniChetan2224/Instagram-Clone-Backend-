import mongoose from "mongoose";

const reelSchema = new mongoose.Schema({
  videoUrl: String,
  caption: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Reel", reelSchema);
