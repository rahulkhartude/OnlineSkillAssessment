const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

router.get('/section/:sectionId', async (req, res) => {
  const { sectionId } = req.params;
  try {
    const questions = await Question.find({ section: sectionId });
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch questions' });
  }
});

module.exports = router;
