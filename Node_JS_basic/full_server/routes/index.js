const express = require('express');
const AppController = require('../controllers/AppController');
const StudentController = require('../controllers/StudentsController');

const router = express.Router();

router.get('/', (req, res) => {
  AppController.getHomepage(req, res);
});

router.get('/students', (req, res) => {
  StudentController.getAllStudents(req, res);
});

router.get('/students/:major', (req, res) => {
  StudentController.getAllStudentsByMajor(req, res);
});

module.exports = router; // Export the router
