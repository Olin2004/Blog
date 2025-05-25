import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-text">
      This site was made with a lot of <span style={{color: '#ff4b6e'}}>♥</span>
    </div>
    <div className="footer-socials">
      {/* Thêm icon LinkedIn, GitHub, Discord ... */}
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
      <a href="https://discord.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-discord"></i></a>
    </div>
  </footer>
);

export default Footer; 