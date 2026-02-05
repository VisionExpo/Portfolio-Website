import React from 'react';
import gsap from 'gsap';

const Contact = () => {
  const socialMedia = [
    { id: 1, name: 'LinkedIn', icon: 'Assets/Icons/Social Media/linkdln.png', link: 'https://www.linkedin.com' },
    { id: 2, name: 'Twitter', icon: 'Assets/Icons/Social Media/insta.jpeg', link: 'https://twitter.com' },
    { id: 3, name: 'GitHub', icon: 'Assets/Icons/Social Media/github.png', link: 'https://github.com' },
    { id: 4, name: 'Medium', icon: 'Assets/Icons/Social Media/medium.png', link: 'https://medium.com' }
  ];

  const handleIconHover = (e, isEnter) => {
    const icon = e.currentTarget;
    if (isEnter) {
      gsap.to(icon, { duration: 0.3, scale: 1.1, rotation: 5, ease: 'back.out(1.7)' });
    } else {
      gsap.to(icon, { duration: 0.3, scale: 1, rotation: 0, ease: 'power2.out' });
    }
  };

  return (
    <section id="contact" className="contact-section text-center text-white py-5">
      <div className="container">
        <h2 className="mb-4">Contact Me</h2>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-3">
            <div className="contact-info">
              <i className="fas fa-envelope"></i>
              <span>gorulevishal984@gmail.com</span>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="contact-info">
              <i className="fas fa-phone-alt"></i>
              <span>9172838972</span>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {socialMedia.map(social => (
            <div key={social.id} className="col-md-1 mb-3 social-icon-container">
              <a href={social.link} target="_blank" rel="noopener noreferrer" onMouseEnter={(e) => handleIconHover(e, true)} onMouseLeave={(e) => handleIconHover(e, false)}>
                <img src={social.icon} alt={social.name} className="social-icon" />
                <p>{social.name}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
