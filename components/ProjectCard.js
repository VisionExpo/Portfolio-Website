// ProjectCard.js - Component for project cards with hover animations
const ProjectCard = ({ project }) => {
  const cardRef = React.useRef(null);

  // Hover animation handlers
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
          <p className="card-text text-muted small mb-3">{project.description}</p>
          
          {/* Tech Stack Pills */}
          <div className="mb-3">
            {project.techStack && project.techStack.map((tech, index) => (
              <span key={index} className="badge badge-dark mr-1 border border-secondary text-light font-weight-normal" style={{ fontSize: '0.75rem', opacity: 0.8 }}>{tech}</span>
            ))}
          </div>

          <a
            href={project.link}
            className="btn btn-primary btn-block mt-auto"
            target="_blank"
            rel="noopener noreferrer"
          >
            View System
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
      link: 'https://github.com/VisionExpo/Potato-Disease-Detection',
      techStack: ['Deep Learning', 'CNN', 'Python', 'TensorFlow']
    },
    {
      id: 2,
      title: 'Q&A System Using Gemini-Pro API',
      description: 'A Q&A system that utilizes the Gemini-Pro API to provide accurate responses to user inquiries, enhancing user experience in various applications.',
      image: 'Assets/Images/Project/Q&A.jpeg',
      link: 'https://github.com/VisionExpo/QA-System-using-Gemini-Pro-API',
      techStack: ['LLM', 'Gemini API', 'Python', 'Streamlit']
    },
    {
      id: 3,
      title: 'Stock Price Prediction',
      description: 'This project focuses on predicting stock prices using historical data and ML models, aiding investors in making informed trading decisions.',
      image: 'Assets/Images/Project/stock price.jpeg',
      link: 'https://github.com/VisionExpo/Stock_price_prediction',
      techStack: ['Machine Learning', 'LSTM', 'Python', 'Pandas']
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
