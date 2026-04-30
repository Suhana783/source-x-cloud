const Course = require('./courses.model');


exports.createCourseService = async (courseData) => {
    const course = await Course.create(courseData);
    return course;
};

exports.getAllCoursesService = async () => {
    const courses = await Course.find({ isPublished: true});
    return courses;
}


exports.getCourseByIdService = async (id) => {
    const course = await Course.findById(id);
    return course;
}