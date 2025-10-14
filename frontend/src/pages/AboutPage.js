import React from 'react';

const AboutPage = ({ personalInfo, summary }) => {
  return (
    <>
      <header className="header card">
        <div className="about-header-content">
          <img src={personalInfo.photo} alt={personalInfo.name} className="profile-photo" />
          <div className="header-text">
            <h1>{personalInfo.name}</h1>
            <p>{personalInfo.title}</p>
            <div className="header-links">
              <a href={`mailto:${personalInfo.email}`}>Email</a> |
              <a href={personalInfo.linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a> |
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">Github</a>
            </div>
          </div>
        </div>
      </header>

      <section id="bio" className="card">
        <h2>Short Bio</h2>
        <p>{personalInfo.bio}</p>
      </section>

      <section id="summary" className="card">
        <h2>Professional Summary</h2>
        <p>{summary}</p>
      </section>

      <section id="motivation" className="card">
        <h2>Motivation</h2>
        <p>{personalInfo.motivation}</p>
      </section>
    </>
  );
};

export default AboutPage;

