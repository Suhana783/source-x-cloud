const courseService = require('./courses.services');
const asyncHandler = require('../../Utility/asyncHandler');


exports.createCourse = asyncHandler(async (req, res, next) => {
    const course = await courseService.createCourseService(req.body);

    res.status(201).json({
        success: true,
        message: "Course created successfully",
        data: course
    });
});

exports.getAllCourses = asyncHandler(async (req, res, next) => {
    const courses = await courseService.getAllCoursesService();

    res.status(200).json({
        success: true,
        count: courses.length,
        data: courses
    });
});


exports.getCourseById = asyncHandler(async (req, res, next) => {
    const course = await courseService.getCourseByIdService(req.params.id);

    
    if (!course) {
        const error = new Error("Course not found");
        error.statusCode = 404;
        throw error;
    }

    res.status(200).json({ success: true, data: course });
});