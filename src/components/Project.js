
import React from 'react';

const Project = ({ title, description, image, githubLink, liveLink }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={image} alt={`${title} Project`} />
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        GitHub Repository
      </a>
      <a href={liveLink} target="_blank" rel="noopener noreferrer">
        Live Application
      </a>
    </div>
  );
};

export default Project;
