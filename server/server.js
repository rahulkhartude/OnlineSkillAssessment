 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const questionRoutes = require('./routes/questionRoutes');
const answerRoutes = require('./routes/answerRoutes');
const progressRoutes = require('./routes/progressRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/questions', questionRoutes);
app.use('/api/answers', answerRoutes);
app.use('/api/progress', progressRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch((err) => console.error(err));
