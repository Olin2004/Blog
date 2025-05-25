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

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo_nav_wrapper}>
          <div className={styles.logo_container}>
            <img src="/logo/face.png" alt="Logo" className={`${styles.logo} ${styles.logo_hover}`} />
          </div>
          <nav className={styles.nav}>
            {navItems.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                className={`${styles.nav_link} ${animateNav ? styles.nav_bounce : ''}`}
                style={animateNav ? { animationDelay: `${idx * 0.13 + 0.1}s` } : {}}
              >
                {item.label}
              </a>
            ))}
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