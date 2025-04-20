// animations.js - Add animations and navigation to all pages

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
    
    // Add a navbar that changes on scroll
    addNavbar();
    
    // Change navbar background on scroll
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
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
          // Use GSAP for smooth scrolling if ScrollToPlugin is available
          if (typeof ScrollToPlugin !== 'undefined') {
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
  } else {
    console.error('GSAP not loaded');
  }
});

// Function to add the navbar to all pages
function addNavbar() {
  // Check if navbar already exists
  if (!document.querySelector('.navbar')) {
    const navbar = document.createElement('nav');
    navbar.className = 'navbar navbar-expand-lg navbar-dark bg-dark fixed-top';
    
    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navbar.innerHTML = `
      <div class="container">
        <a class="navbar-brand" href="index.html">Vishal Gorule</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item ${currentPage === 'index.html' || currentPage === '' ? 'active' : ''}">
              <a class="nav-link" href="index.html">Home</a>
            </li>
            <li class="nav-item ${currentPage === 'projects.html' ? 'active' : ''}">
              <a class="nav-link" href="projects.html">Projects</a>
            </li>
            <li class="nav-item ${currentPage === 'skills.html' ? 'active' : ''}">
              <a class="nav-link" href="skills.html">Skills</a>
            </li>
            <li class="nav-item ${currentPage === 'blogs.html' ? 'active' : ''}">
              <a class="nav-link" href="blogs.html">Blogs</a>
            </li>
            <li class="nav-item ${currentPage === 'contact.html' ? 'active' : ''}">
              <a class="nav-link" href="contact.html">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link resume-nav-link" href="Assets/Resume/VishalGoruleResume-FEB.pdf" download>
                <i class="fas fa-download"></i> Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    `;
    
    // Insert the navbar at the beginning of the body
    document.body.insertBefore(navbar, document.body.firstChild);
  }
}
