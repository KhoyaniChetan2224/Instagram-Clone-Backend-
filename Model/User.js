const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: String,
  fullName: String,
  profilePic: String,
  bio: String,
  followers: [String],
  following: [String],
});
module.exports = mongoose.model("User", userSchema);