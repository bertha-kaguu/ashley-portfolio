import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => setIsMenuOpen(!isMenuOpen);
  const closeMobileMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="nav-logo" >Ashley Kaguu</NavLink>
        <ul className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item"><NavLink to="/about" className="nav-link">About</NavLink></li>
          <li className="nav-item"><NavLink to="/skills" className="nav-link">Skills</NavLink></li>
          <li className="nav-item"><NavLink to="/projects" className="nav-link">Projects</NavLink></li>
          <li className="nav-item"><NavLink to="/certifications" className="nav-link">Certifications</NavLink></li>
          <li className="nav-item"><NavLink to="/contact" className="nav-link">Contact</NavLink></li>

          <div className="nav-icon" onClick={handleToggle}>
          {isMenuOpen ? '✕' : '☰'}
        </div>
            
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

