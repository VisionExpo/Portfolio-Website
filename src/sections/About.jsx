import React from 'react';

const About = () => {
  return (
    <div className="section-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5 mb-4 mb-md-0">
            <div className="profile-picture-container text-center">
               <div style={{ width: '250px', height: '250px', borderRadius: '50%', border: '2px solid var(--neon-green)', margin: '0 auto', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '3rem', color: 'var(--neon-green)' }}>VG</span>
               </div>
            </div>
          </div>
          <div className="col-md-7">
            <h2 className="mb-4">About Me</h2>
            <p className="text-muted mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              I am an AI Systems Engineer focused on bridging the gap between research models and production systems. 
              I don't just train models; I build the infrastructure, pipelines, and interfaces that make them useful.
            </p>
            <p className="text-muted mb-4">
              My work revolves around Computer Vision, NLP, and scalable backend systems. 
              I care about performance, clean architecture, and solving real-world problems with intelligent software.
            </p>
            <div className="row mt-4">
              <div className="col-6">
                <div className="d-flex align-items-center mb-3">
                  <i className="fas fa-code me-3" style={{ color: 'var(--neon-green)' }}></i>
                  <span>System Design</span>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center mb-3">
                  <i className="fas fa-brain me-3" style={{ color: 'var(--neon-green)' }}></i>
                  <span>Deep Learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
