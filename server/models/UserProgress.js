const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  userId: String,
  completedSections: [Number]
});

module.exports = mongoose.model('UserProgress', progressSchema);
