// main.js - Entry point for React application

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Render the React app to the root element
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
  
  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Use GSAP for smooth scrolling
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: targetElement,
            offsetY: 70 // Account for fixed header
          },
          ease: 'power2.inOut'
        });
      }
    });
  });
  
  // Add scroll-triggered animations for page sections
  const animateSections = () => {
    // Register ScrollTrigger plugin if not already registered
    if (!ScrollTrigger.isRegistered) {
      gsap.registerPlugin(ScrollTrigger);
    }
    
    // Create a timeline for each section
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      // Create a timeline for this section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      });
      
      // Add subtle background animation
      tl.to(section, {
        duration: 0.5,
        backgroundColor: 'rgba(28, 28, 48, 0.95)',
        ease: 'power1.inOut'
      });
    });
  };
  
  // Initialize additional animations
  const initAdditionalAnimations = () => {
    // Add a subtle parallax effect to the profile picture
    gsap.to('.profile-picture', {
      scrollTrigger: {
        trigger: '#about',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      },
      y: 50,
      rotation: 5,
      ease: 'none'
    });
    
    // Add a subtle parallax effect to project images
    gsap.utils.toArray('.card-img-top').forEach(image => {
      gsap.to(image, {
        scrollTrigger: {
          trigger: image,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        },
        y: 20,
        ease: 'none'
      });
    });
  };
  
  // Call animation functions
  animateSections();
  initAdditionalAnimations();
});
