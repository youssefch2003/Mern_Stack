const mongoose = require("mongoose");

// Create JokeSchema
const JokeSchema = new mongoose.Schema({
  setup: {
    type: String,
    required: true,
  },
  punchline: {
    type: String,
    required: true,
  },
});

// Create Joke model
const Joke = mongoose.model("Joke", JokeSchema);

// Export Joke model
module.exports = Joke;