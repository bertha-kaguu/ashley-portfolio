import React from 'react';

const ProjectsPage = ({ projects }) => {
  return (
    <section id="projects" className="card">
      <h2>Projects</h2>
      {projects.map((job, index) => (
        <div key={index} className="experience-item">
          <h3>{job.role} - {job.company}</h3>
          <p className="period">{job.period}</p>
          <ul>
            {job.responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}
          </ul>
          <p><strong>Key Achievement:</strong> {job.achievement}</p>
          {index < projects.length - 1 && <hr style={{ borderColor: 'var(--border-color)' }} />}
        </div>
      ))}
    </section>
  );
};

export default ProjectsPage;

