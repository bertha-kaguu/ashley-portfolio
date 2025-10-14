import React from 'react';

const SkillsPage = ({ skills }) => {
  return (
    <section id="skills" className="card">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h4>Languages</h4>
          <ul>{skills.languages.map(s => <li key={s}>{s}</li>)}</ul>
        </div>
        <div className="skill-category">
          <h4>Frontend</h4>
          <ul>{skills.frontend.map(s => <li key={s}>{s}</li>)}</ul>
        </div>
        <div className="skill-category">
          <h4>Databases</h4>
          <ul>{skills.databases.map(s => <li key={s}>{s}</li>)}</ul>
        </div>
        <div className="skill-category">
          <h4>Tools & Platforms</h4>
          <ul>{skills.tools.map(s => <li key={s}>{s}</li>)}</ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;

