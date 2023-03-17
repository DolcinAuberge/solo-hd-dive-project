const express = require('express');
const { getAllExams,
        getOneExam,
        createOneExam,
        deleteOneExam,
        updateOneExam
      } = require('../controllers/exam-controller');
const router = express.Router();

/* GET all exams. */
router.get('/', getAllExams);

/* GET a single exam. */
router.get('/:id', getOneExam);

/* Post an exam. */
router.post('/', createOneExam);

/* Delete an exam. */
router.delete('/:id', deleteOneExam);

/* Updata an exam. */
router.patch('/:id', updateOneExam);

module.exports = router;
