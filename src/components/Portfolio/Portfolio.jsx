import React from 'react';
import Project from '../Project/Project'; 
import './Portfolio.css';

import blogImage from '../../assets/blog-image.jpeg';
import uHubImage from '../../assets/u-hub.webp';
import listImage from '../../assets/list.webp';
import jateImage from '../../assets/jate.png';
import socialImage from '../../assets/social.webp';
import employeeImage from '../../assets/employee.jpeg';

function Portfolio() {
  const projects = [
    {
      title: "MVC Blogging Application",
      image: blogImage, 
      repoLink: "https://github.com/NickCamacho15/Blogging-App-MVC", 
    },
    {
      title: "U-HUB: All-in-one day planner",
      image: uHubImage,
      repoLink: "https://github.com/NickCamacho15/U-HUB", 
    },
    {
      title: "Full Stack Shared Shopping List",
      image: listImage,
      repoLink: "https://github.com/NickCamacho15/Full-Stack-Shopping-List", 
    },
    {
      title: "Progressive Web App Text Editor",
      image: jateImage,
      repoLink: "https://github.com/NickCamacho15/PWA-Text-Editor-NickC", 
    },
    {
      title: "MongoDB Social App",
      image: socialImage,
      repoLink: "https://github.com/NickCamacho15/MongoDB-Social-App", 
    },
    {
      title: "MySQL Employee Tracker",
      image: employeeImage,
      repoLink: "https://github.com/NickCamacho15/Employee-Tracker-Mysql-NickC", 
    },
  ];

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
