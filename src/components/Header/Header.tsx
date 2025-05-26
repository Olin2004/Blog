import { useState } from 'react';
import IntroInfo from '../IntroSection';
import styles from './Header.module.css';

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    link: "#"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates",
    technologies: ["React", "Redux", "WebSocket", "Spring Boot"],
    link: "#"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing projects and skills",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    link: "#"
  }
];

const Header = () => {
  const navItems = [
    { label: 'HOME', href: '#' },
    { label: 'ABOUT ME', href: '#about-me' },
    { label: 'PROJECT', href: '#' },
    { label: 'CONTACT', href: '#' },
  ];

  const animateNav = true; // Set this based on your animation trigger logic
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo_nav_wrapper}>
          <div className={styles.logo_container}>
            <img src="/logo/face.png" alt="Logo" className={`${styles.logo} ${styles.logo_hover}`} />
          </div>
          <nav className={styles.nav}>
            {navItems.map((item, idx) => {
              if (item.label === 'CONTACT') {
                return (
                  <div
                    key={item.label}
                    className={styles.nav_dropdown_wrapper}
                    onMouseEnter={() => setContactDropdownOpen(true)}
                    onMouseLeave={() => setContactDropdownOpen(false)}
                    style={{ position: 'relative', display: 'inline-block' }}
                  >
                    <a
                      href={item.href}
                      className={`${styles.nav_link} ${animateNav ? styles.nav_bounce : ''}`}
                      style={animateNav ? { animationDelay: `${idx * 0.13 + 0.1}s` } : {}}
                    >
                      {item.label}
                    </a>
                    {contactDropdownOpen && (
                      <div className={styles.dropdown_menu_megamenu}>
                        <div className={styles.dropdown_col}>
                          <div className={styles.dropdown_group_title}>Personal Contact</div>
                          <a href="https://mail.google.com/mail/?view=cm&to=vanson2004tkhd@gmail.com" target="_blank" rel="noopener noreferrer">📧 Email</a>
                          <a href="https://zalo.me/0987730280" target="_blank" rel="noopener noreferrer">📦 Zalo</a>
                          <a href="https://www.facebook.com/tolason04.hd" target="_blank" rel="noopener noreferrer">♾️ Facebook</a>
                        </div>
                        <div className={styles.dropdown_col}>
                          <div className={styles.dropdown_group_title}>Support</div>
                          <a href="#help">❓ Guide</a>
                          <a href="#feedback">📝 Feedback</a>
                        </div>
                      </div>
                    )}
                  </div>
                );
              } else if (item.label === 'PROJECT') {
                return (
                  <div
                    key={item.label}
                    className={styles.nav_dropdown_wrapper}
                    onMouseEnter={() => setProjectsDropdownOpen(true)}
                    onMouseLeave={() => setProjectsDropdownOpen(false)}
                    style={{ position: 'relative', display: 'inline-block' }}
                  >
                    <a
                      href={item.href}
                      className={`${styles.nav_link} ${animateNav ? styles.nav_bounce : ''}`}
                      style={animateNav ? { animationDelay: `${idx * 0.13 + 0.1}s` } : {}}
                    >
                      {item.label}
                    </a>
                    {projectsDropdownOpen && (
                      <div className={styles.dropdown_menu}>
                        <div className={styles.dropdown_col}>
                           <div className={styles.dropdown_group_title}>My Projects</div>
                          {projects.map((project, projectIdx) => (
                            <a key={projectIdx} href={project.link} target="_blank" rel="noopener noreferrer">
                              {project.title}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`${styles.nav_link} ${animateNav ? styles.nav_bounce : ''}`}
                  style={animateNav ? { animationDelay: `${idx * 0.13 + 0.1}s` } : {}}
                >
                  {item.label}
                </a>
              );
            })}
            <a href="/cv/Son-Pham-Van-BackEnd-Web-Intern.pdf" className={styles.download_btn} download>
              Download CV
            </a>
          </nav>
        </div>
      </header>
      <IntroInfo />
    </>
  );
};

export default Header;