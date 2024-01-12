
import React from 'react';
import Project from './Project';

const Portfolio = () => {
  // Create an array of project data
  const projects = [
    {
      title: 'Project 1',
      description: 'Description for Project 1',
      image: '%PUBLIC_URL%/assets/images/project1.jpg',
      githubLink: 'https://github.com/your-username/project1',
      liveLink: 'https://your-project1-live-link.com',
    },
    // Add more projects as needed
  ];

  return (
    <div>
      <h2>Portfolio</h2>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
};

export default Portfolio;
