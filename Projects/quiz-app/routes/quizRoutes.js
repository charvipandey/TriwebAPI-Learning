const express = require('express');
const router = express.Router();
const Quiz = require('../models/Quiz');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, async (req, res) => {
  const { title, description, questions } = req.body;
  try {
    const quiz = new Quiz({
      title,
      description,
      questions,
      userId: req.user._id
    });
    await quiz.save();
    res.status(201).json({ msg: 'Quiz created', quiz });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.get('/', authMiddleware, async (req, res) => {
  try {
    const quizzes = await Quiz.find({ userId: req.user._id });
    res.status(200).json(quizzes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz || quiz.userId.toString() !== req.user._id.toString()) {
      return res.status(404).json({ msg: 'Quiz not found' });
    }
    res.status(200).json(quiz);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.put('/:id', authMiddleware, async (req, res) => {
  const { title, description, questions } = req.body;
  try {
    let quiz = await Quiz.findById(req.params.id);
    if (!quiz || quiz.userId.toString() !== req.user._id.toString()) {
      return res.status(404).json({ msg: 'Quiz not found' });
    }

    quiz.title = title || quiz.title;
    quiz.description = description || quiz.description;
    quiz.questions = questions || quiz.questions;
    quiz.state = 'Draft';

    await quiz.save();
    res.status(200).json({ msg: 'Quiz updated', quiz });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz || quiz.userId.toString() !== req.user._id.toString()) {
      return res.status(404).json({ msg: 'Quiz not found' });
    }

    await quiz.remove();
    res.status(200).json({ msg: 'Quiz deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.put('/:id/publish', authMiddleware, async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz || quiz.userId.toString() !== req.user._id.toString()) {
      return res.status(404).json({ msg: 'Quiz not found' });
    }

    quiz.state = 'Published';
    await quiz.save();
    res.status(200).json({ msg: 'Quiz published' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
