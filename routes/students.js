const express = require('express');
const router = express.Router();
const Student = require('../models/Student');
const InternalMarks = require('../models/InternalMarks');

// Route to create a new student
router.post('/', async (req, res) => {
  try {
    const { name, age, email } = req.body;
    console.log(req.body)
     student=new Student({
        "name":req.body.name,
        "age":req.body.age,
        "email":req.body.email

    })

    student.save()
    // const student = await Student.create({ name, age, email });
    res.status(201).json(student);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create student' });
  }
});

// Route to get all students
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch students' });
  }
});

// Route to create internal marks for a student
router.post('/:studentId/internalmarks', async (req, res) => {
  try {
    const { studentId } = req.params;
    const { subject, marks } = req.body;
    console.log(req.params)
    console.log(req.body)
    const student = await Student.findById('646716076f3af37cc4079b64');
    console.log(student)
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    
    const internalMarks = await InternalMarks.create({ student: studentId, subject, marks });
    res.status(201).json(internalMarks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create internal marks' });
  }
});

// Route to get internal marks for a student
router.get('/:studentId/internalmarks', async (req, res) => {
  try {
    const { studentId } = req.params;
    
    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    
    const internalMarks = await InternalMarks.find({ student: studentId });
    res.json(internalMarks);
  }  catch (err) {
    res.status(500).json({ error: 'Failed to fetch internal marks' });
  }
});

module.exports = router;
