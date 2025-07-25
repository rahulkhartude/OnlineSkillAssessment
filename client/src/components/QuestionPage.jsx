import React from 'react';

const QuestionPage = ({ questions, onAnswer }) => {
  return (
    <div>
      {questions.map((q) => (
        <div key={q._id} style={{ marginBottom: '20px' }}>
          <h4>{q.text}</h4>
          {q.options.map((opt) => (
            <div key={opt}>
              <label>
                <input
                  type="radio"
                  name={q._id}
                  onChange={() => onAnswer(q._id, opt)}
                />
                {opt}
              </label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default QuestionPage;
