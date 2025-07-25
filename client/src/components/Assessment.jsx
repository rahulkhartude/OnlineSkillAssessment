import React, { useState, useEffect } from 'react';
import QuestionPage from './QuestionPage';
import SectionProgress from './SectionProgress';
import NavigationControls from './NavigationControls';
import { fetchQuestions, submitAnswers, completeSection, getProgress } from '../services/api';

const userId = 'user123';

const Assessment = () => {
  const [section, setSection] = useState(1);
  const [questions, setQuestions] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [completedSections, setCompletedSections] = useState([]);

  useEffect(() => {
    getProgress(userId).then(({ data }) => {
      setCompletedSections(data?.completedSections || []);
      if (data?.completedSections?.includes(section)) {
        alert(`Section ${section} already completed.`);
        // Optionally navigate to next section or disable
      } else {
        fetchQuestions(section).then((res) => setQuestions(res.data));
      }
    });
  }, [section]);

  const handleAnswer = (questionId, answer) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleNext = () => {
    const currentQs = questions.slice(pageIndex * 2, (pageIndex + 1) * 2);
    const answerPayload = currentQs.map((q) => ({
      questionId: q._id,
      answer: answers[q._id],
    }));

    submitAnswers(userId, answerPayload).then(() => {
      if ((pageIndex + 1) * 2 >= questions.length) {
        completeSection(userId, section).then(() => {
          setSection(section + 1);
          setPageIndex(0);
          setAnswers({});
        });
      } else {
        setPageIndex(pageIndex + 1);
      }
    });
  };

  const currentQuestions = questions.slice(pageIndex * 2, (pageIndex + 1) * 2);

  return (
    <div>
      <h2>Section {section}</h2>
      <SectionProgress section={section} pageIndex={pageIndex} />
      <QuestionPage questions={currentQuestions} onAnswer={handleAnswer} />
      <NavigationControls onNext={handleNext} disableNext={currentQuestions.some(q => !answers[q._id])} />
    </div>
  );
};

export default Assessment;
