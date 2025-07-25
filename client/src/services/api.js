import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

export const fetchQuestions = (sectionId) =>
  axios.get(`${BASE_URL}/questions/section/${sectionId}`);

export const submitAnswers = (userId, answers) =>
  axios.post(`${BASE_URL}/answers`, { userId, answers });

export const getProgress = (userId) =>
  axios.get(`${BASE_URL}/progress/${userId}`);

export const completeSection = (userId, sectionId) =>
  axios.post(`${BASE_URL}/progress/complete-section`, { userId, sectionId });
