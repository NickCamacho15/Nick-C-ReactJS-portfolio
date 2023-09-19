import React from 'react';
import './AboutMe.css';
import profilePic from '../../assets/profile-pic.jpeg'; 

function AboutMe() {
  return (
    <section id="about-me">
      <h2>About Me</h2>
      <img src={profilePic} alt="Nick Camacho" />
      <p>
        Hello! I'm Nick Camacho, a junior software developer based in Columbus, OH. My journey into the tech world has been an exhilarating one, guided by the completion of two intensive tech bootcamps where I honed my skills and built a strong foundation in web development.
      </p>
      <p>
        With a passion for coding and a keen eye for detail, I am on the path to building digital solutions that are not only functional but intuitive and user-friendly. Leveraging the latest technologies and best practices in the industry, I am eager to bring my proactive and problem-solving mindset to a dynamic team.
      </p>
      <p>
        As I navigate the vibrant world of tech, I am open to opportunities that will challenge me and foster growth in my career. I look forward to connecting with potential employers and like-minded professionals to explore the limitless possibilities in the tech space.
      </p>
    </section>
  );
}

export default AboutMe;
