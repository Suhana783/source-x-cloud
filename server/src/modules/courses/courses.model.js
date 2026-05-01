const mongoose = require('mongoose');

const { Schema } = mongoose;

const courseSchema = new Schema({
  title: String,
  shortDescription: String,
  fullDescription: String,

  highlights: [String],

  image: String,
  duration: String,

  mode: {
    type: String,
    enum: ["online", "offline", "hybrid"]
  },

  certificate: Boolean,

  prerequisites: [String],

  curriculum: {
    description: String,
    modules: [
      {
        title: String,
        description: String,
        topics: [
          {
            heading: String,
            content: String
          }
        ]
      }
    ]
  },

  relatedCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course"
    }
  ],

  whyChooseUs: [
    {
      title: String,
      description: String,
      points: [
        {
          heading: String,
          description: String
        }
      ]
    }
  ],

  createdAt: Date,
  updatedAt: Date
});

module.exports = mongoose.model("Course", courseSchema);