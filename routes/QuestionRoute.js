import express from 'express';
import {
  createQuestion,
  deletedQuestion,
  getQuestionById,
  getQuestions,
  updatedQuestion,
} from '../controllers/QuestionController.js';

const router = express.Router();

// ENDPOINT
router.get('/questions', getQuestions);
router.get('/questions/:id', getQuestionById);
router.post('/questions', createQuestion);
router.patch('/questions/:id', updatedQuestion);
router.delete('/questions/:id', deletedQuestion);

export default router;
