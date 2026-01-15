import AppController from '../controllers/AppController'
import StudentController from '../controllers/StudentsController'

const express = require('express');
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