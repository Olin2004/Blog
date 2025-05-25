import React from 'react';
import avatar from '../../assets/avatar.jpg'; // Đổi lại đúng đường dẫn ảnh của bạn
import './About.css';

const About = () => (
  <section className="about-section" id="about">
    <div className="about-info">
      <h2>Phan Huy Hiep (hiepph)</h2>
      <div className="about-role">Full stack developer</div>
      <p className="about-desc">
        I'm Hiep, a passionate computer technician with over 1 year of experience at <a href="https://colavi.vn" target="_blank" rel="noopener noreferrer">colavi</a>, specializing in both Front-End and Back-End development.<br/>
        {/* ... Thêm mô tả như mẫu ... */}
      </p>
      {/* Thêm các icon mạng xã hội ở đây */}
      <div className="about-socials">
        {/* Ví dụ: <a href="#"><img src="..." alt="icon" /></a> */}
      </div>
    </div>
    <div className="about-avatar">
      <img src={avatar} alt="avatar" />
    </div>
  </section>
);

export default About; 