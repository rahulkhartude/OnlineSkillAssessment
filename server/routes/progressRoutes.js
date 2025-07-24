const express = require('express');
const router = express.Router();
const UserProgress = require('../models/UserProgress');

router.get('/:userId', async (req, res) => {
  const { userId } = req.params;
  const progress = await UserProgress.findOne({ userId });
  res.json(progress || { completedSections: [] });
});

router.post('/complete-section', async (req, res) => {
  const { userId, sectionId } = req.body;

  let progress = await UserProgress.findOne({ userId });

  if (!progress) {
    progress = new UserProgress({ userId, completedSections: [sectionId] });
  } else if (!progress.completedSections.includes(sectionId)) {
    progress.completedSections.push(sectionId);
  }

  await progress.save();
  res.json(progress);
});

module.exports = router;
