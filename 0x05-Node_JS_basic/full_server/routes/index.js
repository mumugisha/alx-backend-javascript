const express = require('express');
const AppController = require('../controller/AppController');
const StudentController = require('../controller/studentsController');

const router = express.Router();

router.get('/', AppController.getHomepage);

router.get('/students', StudentController.getAllStudents);

router.get('/students/:major', StudentController.getAllStudentsByMajor);

module.exports = router;
