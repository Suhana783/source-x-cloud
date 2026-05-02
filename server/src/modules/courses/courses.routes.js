const express = require('express');
const router = express.Router();

const courseController = require('./courses.controller');

const validate = require('../../middleware/validate.middleware');
const {
  createCourseSchema,
  updateCourseSchema
} = require('./courses.validator');


// Create + Get All
router.route('/')
  .post(validate(createCourseSchema), courseController.createCourse)
  .get(courseController.getAllCourses);


// Get Single + Update + Delete
router.route('/:id')
  .get(courseController.getCourse)
  .put(validate(updateCourseSchema), courseController.updateCourse)
  .delete(courseController.deleteCourse);


module.exports = router;