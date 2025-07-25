import React from 'react';

const SectionProgress = ({ section, pageIndex }) => {
  return (
    <p>
      Section {section} | Page {pageIndex + 1}
    </p>
  );
};

export default SectionProgress;
