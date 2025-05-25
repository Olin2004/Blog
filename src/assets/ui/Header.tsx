import '../../assets/style/Header.css';

const Header = () => {
  const navItems = [
    { label: 'HOME', href: '#' },
    { label: 'ABOUT ME', href: '#' },
    { label: 'PROJECT', href: '#' },
    { label: 'CONTACT', href: '#' },
  ];

  const animateNav = true; // Set this based on your animation trigger logic

  return (
    <header className="header">
      <div className="logo-container">
        <img src="/logo/face.png" alt="Logo" className="logo logo-hover" />
      </div>
      <nav className="nav">
        {navItems.map((item, idx) => (
          <a
            key={item.label}
            href={item.href}
            className={`nav-link${animateNav ? ' nav-bounce' : ''}`}
            style={animateNav ? { animationDelay: `${idx * 0.13 + 0.1}s` } : {}}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <a href="/cv/Son-Pham-Van-BackEnd-Web-Intern.pdf" className="download-btn" download>Download CV</a>
    </header>
  );
};

export default Header;