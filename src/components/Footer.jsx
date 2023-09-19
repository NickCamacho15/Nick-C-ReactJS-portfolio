import React from 'react';
import './components.css';
import githubLogo from '../assets/github-logo.png';
import linkedinLogo from '../assets/linkedin.webp';
import twitterLogo from '../assets/twitter.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-media-icons">
        <a href="https://github.com/NickCamacho15" target="_blank" rel="noreferrer">
          <img src={githubLogo} alt="GitHub Logo" className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/nicholascamacho/" target="_blank" rel="noreferrer">
          <img src={linkedinLogo} alt="LinkedIn Logo" className="social-icon" />
        </a>
        <a href="https://twitter.com/nickcamacho_" target="_blank" rel="noreferrer">
          <img src={twitterLogo} alt="Twitter Logo" className="social-icon" />
        </a>
      </div>
      © 2023 Nick Camacho
    </footer>
  );
}

export default Footer;
