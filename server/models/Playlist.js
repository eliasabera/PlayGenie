const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlaylistSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
  tracks: [
    {
      spotifyId: { type: String, required: true },
      name: { type: String, required: true },
      artist: { type: String, required: true },
      album: { type: String },
      duration: { type: Number },
      previewUrl: { type: String },
    },
  ],
  mood: { type: String },
  activity: { type: String },
  genres: { type: [String] },
  isPublic: { type: Boolean, default: false },
  spotifyPlaylistId: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Playlist", PlaylistSchema);
