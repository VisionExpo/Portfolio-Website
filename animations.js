// animations.js - Add animations to the existing HTML content using GSAP

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize GSAP
  if (typeof gsap !== 'undefined') {
    console.log('GSAP loaded successfully');

    // Register plugins if available
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      console.log('ScrollTrigger registered');
    }

    if (typeof ScrollToPlugin !== 'undefined') {
      gsap.registerPlugin(ScrollToPlugin);
      console.log('ScrollToPlugin registered');
    }

    // Initialize animations
    initAnimations();
  } else {
    console.error('GSAP not loaded');
  }
});

// Function to initialize all animations
function initAnimations() {
  console.log('Initializing animations');

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
  gsap.from('.card', {
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
  gsap.from('#skills .col-md-3', {
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

  gsap.from('.contact-section .col-md-1', {
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

  // Add hover animations to project cards
  const projectCards = document.querySelectorAll('.card');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        duration: 0.3,
        y: -10,
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
        ease: 'power2.out'
      });

      // Animate the image
      gsap.to(card.querySelector('img'), {
        duration: 0.5,
        scale: 1.05,
        ease: 'power1.out'
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        duration: 0.3,
        y: 0,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        ease: 'power2.out'
      });

      // Reset the image
      gsap.to(card.querySelector('img'), {
        duration: 0.5,
        scale: 1,
        ease: 'power1.out'
      });
    });
  });

  // Add hover animations to skill cards
  const skillCards = document.querySelectorAll('#skills .col-md-3');
  skillCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card.querySelector('img'), {
        duration: 0.4,
        rotation: 10,
        scale: 1.1,
        ease: 'power1.out'
      });

      gsap.to(card.querySelector('h5'), {
        duration: 0.3,
        color: '#ff007f',
        ease: 'power1.out'
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card.querySelector('img'), {
        duration: 0.4,
        rotation: 0,
        scale: 1,
        ease: 'power1.out'
      });

      gsap.to(card.querySelector('h5'), {
        duration: 0.3,
        color: '#212529',
        ease: 'power1.out'
      });
    });
  });

  // Add hover animations to social icons
  const socialIcons = document.querySelectorAll('.contact-section .col-md-1');
  socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      gsap.to(icon, {
        duration: 0.3,
        y: -5,
        ease: 'power2.out'
      });

      gsap.to(icon.querySelector('img'), {
        duration: 0.3,
        scale: 1.1,
        rotation: 5,
        ease: 'back.out(1.7)'
      });
    });

    icon.addEventListener('mouseleave', () => {
      gsap.to(icon, {
        duration: 0.3,
        y: 0,
        ease: 'power2.out'
      });

      gsap.to(icon.querySelector('img'), {
        duration: 0.3,
        scale: 1,
        rotation: 0,
        ease: 'power2.out'
      });
    });
  });

  // Add a navbar that changes on scroll
  let navbar;

  // Check if navbar already exists
  if (!document.querySelector('.navbar')) {
    navbar = document.createElement('nav');
    navbar.className = 'navbar navbar-expand-lg navbar-dark bg-dark fixed-top';
    navbar.innerHTML = `
      <div class="container">
        <a class="navbar-brand" href="#">Vishal Gorule</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projects">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#skills">Skills</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    `;

    // Insert the navbar at the beginning of the body
    document.body.insertBefore(navbar, document.body.firstChild);
  } else {
    navbar = document.querySelector('.navbar');
  }

  // Change navbar background on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Use GSAP for smooth scrolling if ScrollTrigger is available
        if (typeof ScrollTrigger !== 'undefined') {
          gsap.to(window, {
            duration: 1,
            scrollTo: {
              y: targetElement,
              offsetY: 70 // Account for fixed header
            },
            ease: 'power2.inOut'
          });
        } else {
          // Fallback to standard scrolling
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}
