// src/components/Resume.js
import React from 'react';

const Resume = () => {
  return (
    <div>
      <h2>Resume</h2>
      {/* Add a link to your downloadable resume */}
      <a href="%PUBLIC_URL%/assets/files/DanteScornaienchiResume2023.12.pdf" download>
        Download Resume
      </a>
      {/* List your proficiencies */}
      <ul>
        <li>Proficiency 1</li>
        <li>Proficiency 2</li>
        {/* Add more proficiencies */}
      </ul>
    </div>
  );
};

export default Resume;
