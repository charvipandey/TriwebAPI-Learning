const express = require('express');
const router = express.Router();
const Report = require('../models/Report');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, async (req, res) => {
  try {
    const reports = await Report.find({ userId: req.user._id });
    res.status(200).json(reports);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.get('/:quizId', authMiddleware, async (req, res) => {
  try {
    const reports = await Report.find({
      userId: req.user._id,
      quizId: req.params.quizId
    });
    res.status(200).json(reports);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
