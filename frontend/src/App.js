// src/App.js
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import CertificationsPage from './pages/CertificationsPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from your backend API
    fetch('http://localhost:5001/api/portfolio')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setPortfolioData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []); // The empty array ensures this effect runs only once

  if (loading) {
    return <div className="loader">Loading Portfolio...</div>;
  }

  if (error) {
    return <div className="loader">Error: {error}. Is the backend server running?</div>;
  }

  if (!portfolioData) {
    return <div className="loader">No data found.</div>;
  }

  return (
    <Routes>
    <Route path="/" element={<HomePage cards={portfolioData.homePage.cards} />} />
    <Route path="/" element={<Layout />}>
      <Route path="about" element={<AboutPage personalInfo={portfolioData.personalInfo} summary={portfolioData.summary} />} />
      <Route path="skills" element={<SkillsPage skills={portfolioData.skills} />} />
      <Route path="projects" element={<ProjectsPage projects={portfolioData.projects} />} />
      <Route path="certifications" element={<CertificationsPage certifications={portfolioData.certifications} />} />
      <Route path="contact" element={<ContactPage phoneNumber={portfolioData.personalInfo.phone} />} />
    </Route>
  </Routes>
);
}

export default App;



