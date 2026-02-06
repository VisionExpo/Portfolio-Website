import { useEffect, useState } from "react";
import "../styles/navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-inner">
        <a href="#home" className="navbar-logo">
          VG<span>●</span>
        </a>

        <nav className="navbar-links">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>

          <a
            href="/assets/Resume/Vishal_Vilas_Gorule_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-resume"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
