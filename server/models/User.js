const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  spotifyId: { type: String, required: true, unique: true },
  displayName: { type: String },
  email: { type: String },
  accessToken: { type: String },
  refreshToken: { type: String },
  favorites: [{ type: Schema.Types.ObjectId, ref: "Playlist" }],
  preferences: {
    defaultMood: { type: String, default: "happy" },
    favoriteGenres: { type: [String], default: [] },
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", UserSchema);
