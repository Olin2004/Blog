import '../../assets/style/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/logo/face.png" alt="Logo" className="logo logo-hover" />
      </div>
      <nav className="nav">
        <a href="#" className="nav-link">HOME</a>
        <a href="#" className="nav-link">ABOUT ME</a>
        <a href="#" className="nav-link">PROJECT</a>
        <a href="#" className="nav-link">CONTACT</a>
      </nav>
      <a href="/cv/Son-Pham-Van-BackEnd-Web-Intern.pdf" className="download-btn" download>Download CV</a>
    </header>
  );
};

export default Header;