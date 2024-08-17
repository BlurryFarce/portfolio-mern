const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  liveLink: {
    type: String,
  },
  sourceLink: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
});

module.exports = mongoose.model("Project", projectSchema);