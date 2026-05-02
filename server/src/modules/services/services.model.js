// models/Service.js
const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ["hero", "introduction", "features", "industries", "why", "bottom"],
  },
  title: String,
  subtitle: String,
  tagline: String,
  content: String,
  // Hero image field
  image: {
    url: {
      type: String,
      default: "",
    },
    alt: {
      type: String,
      default: "",
    },
  },

  items: [
    {
      text: String,
      icon: String,
    },
  ],
});

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service",
    default: null,
  },
  sections: [sectionSchema],

  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Service", serviceSchema);
