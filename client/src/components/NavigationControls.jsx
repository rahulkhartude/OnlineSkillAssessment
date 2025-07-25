import React from 'react';

const NavigationControls = ({ onNext, disableNext }) => {
  return (
    <div>
      <button onClick={onNext} disabled={disableNext}>
        Next
      </button>
    </div>
  );
};

export default NavigationControls;
