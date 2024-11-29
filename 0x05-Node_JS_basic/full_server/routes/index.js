const express = require('express');
const AppController = require('../controller/AppController.js');
const StudentController = require('../controller/studentsController.js');

const router = express.Router();

router.get('/', AppController.getHomepage);

router.get('/students', StudentController.getAllStudents);

router.get('/students/:major', StudentController.getAllStudentsByMajor);

module.exports = router;
