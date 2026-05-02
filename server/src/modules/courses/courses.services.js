const Course = require('./courses.model');


// Create Course
exports.createCourseService = async (data) => {
  try {
    const course = await Course.create(data);
    return course;
  } catch (error) {
    error.statusCode = 400;
    throw error;
  }
};


// Get All Courses
exports.getAllCoursesService = async () => {
  try {
    const courses = await Course.find();
    return courses;
  } catch (error) {
    error.statusCode = 500;
    throw error;
  }
};


// Get Course By ID
exports.getCourseByIdService = async (id) => {
  try {
    const course = await Course.findById(id);
    return course;
  } catch (error) {
    error.statusCode = 400;
    throw error;
  }
};


// Update Course
exports.updateCourseService = async (id, data) => {
  try {
    const course = await Course.findByIdAndUpdate(id, data, { new: true });
    return course;
  } catch (error) {
    error.statusCode = 400;
    throw error;
  }
};


// Delete Course
exports.deleteCourseService = async (id) => {
  try {
    const course = await Course.findByIdAndDelete(id);
    return course;
  } catch (error) {
    error.statusCode = 400;
    throw error;
  }
};