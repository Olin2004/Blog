import { useState } from 'react';
import IntroInfo from '../IntroSection';
import styles from './Header.module.css';

const Header = () => {
  const navItems = [
    { label: 'HOME', href: '#' },
    { label: 'ABOUT ME', href: '#' },
    { label: 'PROJECT', href: '#' },
    { label: 'CONTACT', href: '#' },
  ];

  const animateNav = true; // Set this based on your animation trigger logic
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                    style={{ position: 'relative', display: 'inline-block' }}
                  >
                    <a
                      href={item.href}
                      className={`${styles.nav_link} ${animateNav ? styles.nav_bounce : ''}`}
                      style={animateNav ? { animationDelay: `${idx * 0.13 + 0.1}s` } : {}}
                    >
                      {item.label}
                    </a>
                    {dropdownOpen && (
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