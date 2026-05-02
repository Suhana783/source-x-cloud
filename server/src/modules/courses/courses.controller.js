const {
  createCourseService,
  getAllCoursesService,
  getCourseByIdService,
  updateCourseService,
  deleteCourseService
} = require('./courses.services');


// Create Course
exports.createCourse = async (req, res, next) => {
  try {
    const course = await createCourseService(req.body);

    res.status(201).json({
      success: true,
      data: course
    });
  } catch (error) {
    next(error);
  }
};


// Get All Courses
exports.getAllCourses = async (req, res, next) => {
  try {
    const courses = await getAllCoursesService();

    res.status(200).json({
      success: true,
      data: courses
    });
  } catch (error) {
    next(error);
  }
};


// Get Single Course
exports.getCourse = async (req, res, next) => {
  try {
    const { id } = req.params;

    const course = await getCourseByIdService(id);

    if (!course) {
      return next(new Error("Course not found"));
    }

    res.status(200).json({
      success: true,
      data: course
    });
  } catch (error) {
    next(error);
  }
};


// Update Course
exports.updateCourse = async (req, res, next) => {
  try {
    const { id } = req.params;

    const course = await updateCourseService(id, req.body);

    if (!course) {
      return next(new Error("Course not found"));
    }

    res.status(200).json({
      success: true,
      data: course
    });
  } catch (error) {
    next(error);
  }
};


// Delete Course
exports.deleteCourse = async (req, res, next) => {
  try {
    const { id } = req.params;

    const course = await deleteCourseService(id);

    if (!course) {
      return next(new Error("Course not found"));
    }

    res.status(200).json({
      success: true,
      message: "Course deleted successfully"
    });
  } catch (error) {
    next(error);
  }
};