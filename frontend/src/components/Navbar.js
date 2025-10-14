import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="nav-logo">Ashley Kaguu</NavLink>
        <ul className="nav-menu">
          <li className="nav-item"><NavLink to="/about" className="nav-link">About</NavLink></li>
          <li className="nav-item"><NavLink to="/skills" className="nav-link">Skills</NavLink></li>
          <li className="nav-item"><NavLink to="/projects" className="nav-link">Projects</NavLink></li>
          <li className="nav-item"><NavLink to="/certifications" className="nav-link">Certifications</NavLink></li>
          <li className="nav-item"><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

