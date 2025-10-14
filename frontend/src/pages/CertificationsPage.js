import React from 'react';

const CertificationsPage = ({ certifications }) => {
  return (
    <section id="certifications" className="card">
      <h2>Certifications</h2>
      <ul>
        {certifications.map((cert, index) => <li key={index}>{cert}</li>)}
      </ul>
    </section>
  );
};

export default CertificationsPage;

