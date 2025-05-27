import React from 'react';
import './Contact.css';

const Contact = () => (
  <section className="contact-section" id="contact">
    <h2>Contact me</h2>
    <p>If you've seen my potential or want to talk to me, don't hesitate to send me a message.</p>
    <div className="contact-methods">
      <div className="contact-card">
        <span role="img" aria-label="email">📧</span>
        vanson2004tkhd@gmail.com
      </div>
      <div className="contact-card">
        <span role="img" aria-label="phone">📞</span>
        ( +84971080209 )
      </div>
    </div>
  </section>
);

export default Contact; 