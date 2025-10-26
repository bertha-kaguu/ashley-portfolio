import React from 'react';

const CertificationsPage = ({ certifications }) => {
  return (
    <section id="certifications" className="card">
      <h2>Certifications</h2>
      <ul>
        {certifications.map((cert) => (
          <li key={cert.name}>
            <a href={`/certificates/${cert.url}`} target="_blank" rel="noopener noreferrer">
              {cert.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CertificationsPage;

