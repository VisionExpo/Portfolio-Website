// App.js - Main React component
const App = () => {
  // Initialize GSAP ScrollTrigger
  React.useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Initialize animations
    initAnimations();
  }, []);

  // Function to initialize all animations
  const initAnimations = () => {
    // Animate the header/about section
    gsap.from('#about .profile-picture', {
      duration: 1.2,
      opacity: 0,
      y: 50,
      rotation: 10,
      ease: 'power3.out'
    });

    gsap.from('#about h1, #about p', {
      duration: 1,
      opacity: 0,
      y: 30,
      stagger: 0.2,
      ease: 'power2.out',
      delay: 0.3
    });

    // Animate project cards on scroll
    gsap.from('.project-card', {
      scrollTrigger: {
        trigger: '#projects',
        start: 'top 80%',
      },
      duration: 0.8,
      opacity: 0,
      y: 50,
      stagger: 0.2,
      ease: 'back.out(1.7)'
    });

    // Animate skill cards on scroll
    gsap.from('.skill-card', {
      scrollTrigger: {
        trigger: '#skills',
        start: 'top 80%',
      },
      duration: 0.6,
      opacity: 0,
      scale: 0.8,
      stagger: 0.1,
      ease: 'power1.out'
    });

    // Animate contact section
    gsap.from('.contact-info', {
      scrollTrigger: {
        trigger: '.contact-section',
        start: 'top 80%',
      },
      duration: 0.8,
      opacity: 0,
      y: 30,
      stagger: 0.2,
      ease: 'power2.out'
    });

    gsap.from('.social-icon-container', {
      scrollTrigger: {
        trigger: '.contact-section',
        start: 'top 70%',
      },
      duration: 0.5,
      opacity: 0,
      scale: 0,
      stagger: 0.1,
      ease: 'back.out(1.7)',
      delay: 0.4
    });
  };

  return (
    <div className="portfolio-app">
      <Header />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
};

// Header Component
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">Vishal Gorule</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// About Section Component
const AboutSection = () => {
  return (
    <section id="about" className="py-5 section-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 text-center text-md-left mb-4 mb-md-0">
            <img src="Assets/Images/About Me/Vishal Gorule new.jpeg" alt="Vishal Gorule" className="profile-picture rounded-circle" />
          </div>
          <div className="col-md-8">
            <h1 className="display-4" style={{ color: '#ff007f', fontSize: '2rem' }}>I'm Vishal Gorule</h1>
            <p className="h5 text-muted">AI/ML Engineer & Software Developer</p>
            <p className="lead mt-4" style={{ color: '#ddd', fontSize: '1rem' }}>
              I specialize in building intelligent systems that leverage machine learning and artificial intelligence to solve real-world problems. With expertise in deep learning, data analysis, and full-stack development, I am dedicated to creating solutions that are not only functional but also optimized for scalability and performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
