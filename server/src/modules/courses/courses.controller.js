const Course = require('./courses.model');

exports.createCourse = async (req, res, next) => {
    
try {
    const data = req.body
    const course = await Course.create(data);

    res.status(201).json({
        success: true,
        data: course
    });
  } catch (error) {
    next(error);
  }

};