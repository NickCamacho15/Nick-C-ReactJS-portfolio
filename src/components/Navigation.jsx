import React from 'react';
import { NavLink } from 'react-router-dom';
import './components.css';

function Navigation() {
    return (
      <nav>
        <NavLink to="/" className="nav-link" end>
          About Me
        </NavLink>
        <NavLink to="/portfolio" className="nav-link">
          Portfolio
        </NavLink>
        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>
        <NavLink to="/resume" className="nav-link">
          Resume
        </NavLink>
      </nav>
    );
  }
  
  export default Navigation;