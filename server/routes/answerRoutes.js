const express = require('express');
const router = express.Router();
const UserAnswer = require('../models/UserAnswer');

router.post('/', async (req, res) => {
  const { userId, answers } = req.body;
  try {
    const savedAnswers = await UserAnswer.insertMany(
      answers.map(a => ({
        userId,
        questionId: a.questionId,
        answer: a.answer
      }))
    );
    res.json(savedAnswers);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save answers' });
  }
});

module.exports = router;
