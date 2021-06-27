const mongoose = require("mongoose");

// Build profile schema
const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },

  bio: {
    type: String,
  },
  favoritemovie: {
    type: String,
  },
  favoritegame: {
    type: String,
  },
  favoritetvseries: {
    type: String,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("profile", ProfileSchema);
