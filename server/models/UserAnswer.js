const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  userId: String,
  questionId: mongoose.Schema.Types.ObjectId,
  answer: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('UserAnswer', answerSchema);
