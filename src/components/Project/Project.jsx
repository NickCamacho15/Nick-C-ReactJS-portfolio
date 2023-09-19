import React from 'react';
import githubLogo from '../../assets/github-logo.png'; 
import './Project.css';

function Project({ title, image, repoLink }) {
  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={image} alt={`${title} screenshot`} />
      <div className="project-links">
        <a href={repoLink} target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub Logo" className="github-logo" />
        </a>
      </div>
    </div>
  );
}

export default Project;
