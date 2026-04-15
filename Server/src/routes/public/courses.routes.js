const express = require('express');
const router = express.Router();


const { 
    createCourse, 
    getAllCourses,
    getCourseById
} = require('../../controllers/public/courses.controller');


router.route('/')
    .post(createCourse) 
    .get(getAllCourses); 

router.route('/:id')
    .get(getCourseById);

module.exports = router;