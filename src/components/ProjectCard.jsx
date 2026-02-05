import React, { useRef } from 'react';
import gsap from 'gsap';

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    const card = cardRef.current;
    gsap.to(card, {
      duration: 0.3,
      y: -10,
      borderColor: '#22c55e',
      boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)',
      ease: 'power2.out'
    });

    gsap.to(card.querySelector('img'), {
      duration: 0.5,
      scale: 1.05,
      ease: 'power1.out'
    });

    gsap.to(card.querySelector('.btn'), {
      duration: 0.3,
      backgroundColor: '#22c55e',
      color: '#0b0f14',
      boxShadow: '0 0 15px rgba(34, 197, 94, 0.6)',
      ease: 'power1.out'
    });
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    gsap.to(card, {
      duration: 0.3,
      y: 0,
      borderColor: 'rgba(255, 255, 255, 0.05)',
      boxShadow: 'none',
      ease: 'power2.out'
    });

    gsap.to(card.querySelector('img'), {
      duration: 0.5,
      scale: 1,
      ease: 'power1.out'
    });

    gsap.to(card.querySelector('.btn'), {
      duration: 0.3,
      backgroundColor: 'transparent',
      color: '#22c55e',
      boxShadow: 'none',
      ease: 'power1.out'
    });
  };

  return (
    <div className="col-md-4 mb-4 project-card">
      <div className="card" ref={cardRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <img src={project.image} className="card-img-top" alt={project.title} />
        <div className="card-body">
          <h5 className="card-title">{project.title}</h5>
          <p className="card-text text-muted small mb-3">{project.description}</p>
          <div className="mb-3">
            {project.techStack && project.techStack.map((tech, index) => (
              <span key={index} className="badge badge-dark mr-1 border border-secondary text-light font-weight-normal" style={{ fontSize: '0.75rem', opacity: 0.8 }}>{tech}</span>
            ))}
          </div>
          <a href={project.link} className="btn btn-primary btn-block mt-auto" target="_blank" rel="noopener noreferrer">View System</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
