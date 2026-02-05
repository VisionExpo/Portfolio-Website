import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a className="navbar-brand font-weight-bold" href="#" style={{ fontFamily: 'var(--font-mono)' }}>
          &lt;Vishal /&gt;
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            <li className="nav-item">
              <a className="nav-link resume-nav-link" href="Assets/Resume/Vishal_Gorule_Resume.pdf" target="_blank">Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
