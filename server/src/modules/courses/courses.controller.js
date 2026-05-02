const Course = require('./courses.model');


// Create Courses 
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

// Get All Courses
exports.getAllCourses = async (req, res, next) => {

  try {
    const courses = await Course.find();

    res.status(200).json({
      success : true,
      data : courses
    })
  } catch (error) {
    next (error)
  }
};

// Get Single Course
exports.getCourse = async (req, res, next) => {

  try {
    const {id} = req.params;

    const course = await Course.findById(id);

    if (!course) {
      return next(new Error("Course not found"));
    }

    res.status(200).json({
      success : true,
      data : course
    });

  } catch (error) {
    next (error);
  }
};

// Update Courses 
exports.updateCourse = async (req, res, next) => {
  try {
    const { id } = req.params;

    const course = await Course.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

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
    const {id} = req.params;

    const course = await Course.findByIdAndDelete(id);

    if (!course) {
      return next (new Error ("Course not found"));
    }

    res.status(200).json({
      success : true,
      message : "Course deleted successsfully"
    });
  } catch (error) {
    next(error);
  }
};