// ProjectCard.js - Component for project cards with hover animations
const ProjectCard = ({ project }) => {
  const cardRef = React.useRef(null);

  // Hover animation handlers
  const handleMouseEnter = () => {
    const card = cardRef.current;
    gsap.to(card, {
      duration: 0.3,
      y: -10,
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
      ease: 'power2.out'
    });

    gsap.to(card.querySelector('img'), {
      duration: 0.5,
      scale: 1.05,
      ease: 'power1.out'
    });

    gsap.to(card.querySelector('.btn'), {
      duration: 0.3,
      scale: 1.05,
      backgroundColor: '#e60073',
      ease: 'power1.out'
    });
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    gsap.to(card, {
      duration: 0.3,
      y: 0,
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      ease: 'power2.out'
    });

    gsap.to(card.querySelector('img'), {
      duration: 0.5,
      scale: 1,
      ease: 'power1.out'
    });

    gsap.to(card.querySelector('.btn'), {
      duration: 0.3,
      scale: 1,
      backgroundColor: '#ff007f',
      ease: 'power1.out'
    });
  };

  return (
    <div className="col-md-4 mb-4 animated-item project-card">
      <div
        className="card"
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={project.image} className="card-img-top" alt={project.title} />
        <div className="card-body">
          <h5 className="card-title">{project.title}</h5>
          <p className="card-text">{project.description}</p>
          <a
            href={project.link}
            className="btn btn-primary btn-block mt-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

// Projects Section Component
const ProjectsSection = () => {
  // Project data
  const projects = [
    {
      id: 1,
      title: 'Potato Crop Disease Detection',
      description: 'This project uses deep learning techniques to identify and classify diseases in potato crops from images, helping farmers protect their crops and improve yield.',
      image: 'Assets/Images/Project/potato.jpeg',
      link: 'https://github.com/VisionExpo/Potato-Disease-Detection'
    },
    {
      id: 2,
      title: 'Q&A System Using Gemini-Pro API',
      description: 'A Q&A system that utilizes the Gemini-Pro API to provide accurate responses to user inquiries, enhancing user experience in various applications.',
      image: 'Assets/Images/Project/Q&A.jpeg',
      link: 'https://github.com/VisionExpo/QA-System-using-Gemini-Pro-API'
    },
    {
      id: 3,
      title: 'Stock Price Prediction',
      description: 'This project focuses on predicting stock prices using historical data and ML models, aiding investors in making informed trading decisions.',
      image: 'Assets/Images/Project/stock price.jpeg',
      link: 'https://github.com/VisionExpo/Stock_price_prediction'
    }
  ];
  
  return (
    <AnimatedSection id="projects" title="Projects">
      <div className="row">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </AnimatedSection>
  );
};
