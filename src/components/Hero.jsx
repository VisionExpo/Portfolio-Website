import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', { y: 30, opacity: 0, duration: 1, delay: 0.2 });
      gsap.from('.hero-subtitle', { y: 30, opacity: 0, duration: 1, delay: 0.4 });
      gsap.from('.hero-cta', { y: 30, opacity: 0, duration: 1, delay: 0.6 });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="hero-section d-flex align-items-center" ref={heroRef}>
      <div className="container text-center">
        <h1 className="display-3 font-weight-bold mb-3 hero-title">
          Vishal Gorule
          <span style={{ color: 'var(--neon-green)', fontSize: '0.5em', verticalAlign: 'super', marginLeft: '10px' }}>●</span>
        </h1>
        <h2 className="h3 mb-4 hero-subtitle" style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
          AI Systems Engineer
        </h2>
        <p className="lead mb-5 hero-subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
          Building intelligent systems that <span className="text-white">reason</span>, <span className="text-white">see</span>, <span className="text-white">speak</span>, and <span className="text-white">make decisions</span>.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary mr-3 px-4 py-2">View Projects</a>
          <a href="Assets/Resume/Vishal_Gorule_Resume.pdf" target="_blank" className="resume-btn">Download Resume</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
