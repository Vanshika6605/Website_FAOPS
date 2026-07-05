const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema(
  {
    section: { type: String, required: true },
    title: String,
    body: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Content", contentSchema);