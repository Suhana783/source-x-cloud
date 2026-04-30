const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: [true, 'Course title is required'],
        trim: true 
    },
    category: { 
        type: String, 
        required: [true, 'Category is required'],
        enum: ['Python', 'Data Science', 'Networking', 'Cybersecurity', 'Full Stack', 'Linux', 'DevOps']
    },
    price: { 
        type: Number, 
        required: [true, 'Price is required'] 
    },
    duration: { 
        type: String, 
        required: true // e.g., "8 Weeks"
    },
    description: { 
        type: String, 
        required: true 
    },
    syllabus: { 
        type: [String], // Array of strings for topics
        default: [] 
    },
    trainerInfo: {
        name: { type: String, default: 'SourceXCloud Expert' },
        bio: String
    },
    isPublished: {
        type: Boolean,
        default: true 
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Course', CourseSchema);