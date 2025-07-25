import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AssessmentPage from './pages/AssessmentPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AssessmentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
