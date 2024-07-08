const express = require('express');
const router = express.Router();
const QuizAttempt = require('../models/quizAttempt');
const Quiz = require('../models/Quiz');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/:quizId/start', authMiddleware, async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.quizId);
    if (!quiz || quiz.state !== 'Published') {
      return res.status(404).json({ msg: 'Quiz not found or not published' });
    }

    const existingAttempts = await QuizAttempt.countDocuments({
      quizId: req.params.quizId,
      userId: req.user._id
    });

    const quizAttempt = new QuizAttempt({
      quizId: req.params.quizId,
      userId: req.user._id,
      attemptNumber: existingAttempts + 1
    });

    await quizAttempt.save();
    res.status(201).json({ msg: 'Quiz attempt started', quizAttempt });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.post('/:quizId/submit', authMiddleware, async (req, res) => {
  const { answers } = req.body;
  try {
    const quiz = await Quiz.findById(req.params.quizId);
    if (!quiz || quiz.state !== 'Published') {
      return res.status(404).json({ msg: 'Quiz not found or not published' });
    }

    let score = 0;
    quiz.questions.forEach((question, index) => {
      if (question.options.some(option => option.isCorrect && option.text === answers[index])) {
        score++;
      }
    });

    const quizAttempt = await QuizAttempt.findOne({
      quizId: req.params.quizId,
      userId: req.user._id
    }).sort({ createdAt: -1 });

    quizAttempt.answers = answers.map((answer, index) => ({
      question: quiz.questions[index].questionText,
      answer
    }));

    await quizAttempt.save();

    const report = new Report({
      quizId: req.params.quizId,
      userId: req.user._id,
      score,
      correctAnswers: score,
      otherReportData: `Attempt number: ${quizAttempt.attemptNumber}`
    });

    await report.save();

    res.status(200).json({ msg: 'Quiz submitted successfully', score });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.get('/:quizId/attempts', authMiddleware, async (req, res) => {
  try {
    const attempts = await QuizAttempt.find({
      quizId: req.params.quizId,
      userId: req.user._id
    });
    res.status(200).json(attempts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
