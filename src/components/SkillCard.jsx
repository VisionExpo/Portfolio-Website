import React, { useRef } from 'react';
import gsap from 'gsap';

const SkillCard = ({ skill }) => {
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    const card = cardRef.current;
    gsap.to(card, { duration: 0.3, y: -5, ease: 'power2.out' });
    gsap.to(card.querySelector('img'), { duration: 0.4, rotation: 10, scale: 1.1, ease: 'power1.out' });
    gsap.to(card.querySelector('h5'), { duration: 0.3, color: '#22c55e', ease: 'power1.out' });
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    gsap.to(card, { duration: 0.3, y: 0, ease: 'power2.out' });
    gsap.to(card.querySelector('img'), { duration: 0.4, rotation: 0, scale: 1, ease: 'power1.out' });
    gsap.to(card.querySelector('h5'), { duration: 0.3, color: '#e5e7eb', ease: 'power1.out' });
  };

  return (
    <div className="col-md-3 mb-4 skill-card">
      <div className="text-center" ref={cardRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <img src={skill.icon} alt={skill.name} className="mb-3" style={{ width: '80px', height: '80px' }} />
        <h5 className="font-weight-bold">{skill.name}</h5>
        <p className="text-muted">{skill.description}</p>
      </div>
    </div>
  );
};

export default SkillCard;
