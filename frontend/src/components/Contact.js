import React, { useState } from 'react';

const Contact = ({ phoneNumber }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `Hello Ashley, my name is ${name}. ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    // Remove non-digit characters from the phone number for the wa.me link
    const cleanPhoneNumber = phoneNumber.replace(/\D/g, '');
    const whatsappUrl = `https://wa.me/${cleanPhoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="card">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Send via WhatsApp</button>
      </form>
    </section>
  );
};

export default Contact;

