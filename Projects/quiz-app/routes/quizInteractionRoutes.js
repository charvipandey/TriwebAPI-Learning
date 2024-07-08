const express = require('express');
const router = express.Router();
const Quiz = require('../models/Quiz');
const User = require('../models/User');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/:quizId/submit', authMiddleware, async (req, res) => {
  const { quizId } = req.params;
  const { answers } = req.body;
  try {
    const quiz = await Quiz.findById(quizId);
    if (!quiz) {
      return res.status(404).json({ msg: 'Quiz not found' });
    }
    let score = 0;
    quiz.questions.forEach((question, index) => {
      if (question.options.some(option => option.isCorrect && option.text === answers[index])) {
        score++;
      }
    });
    const attempt = {
      quiz: quizId,
      score,
      answers: answers.map((answer, index) => ({
        question: quiz.questions[index].questionText,
        answer
      }))
    };
    req.user.attempts.push(attempt);
    await req.user.save();
    res.status(200).json({ msg: 'Quiz submitted successfully', score });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
