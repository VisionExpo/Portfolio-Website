/**
 * Form Handler for Portfolio Contact Form
 * 
 * This script provides a fallback option for handling form submissions
 * when the server-side solution is not available.
 */

document.addEventListener('DOMContentLoaded', function() {
  // Check if the contact form exists on the page
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  // Get form elements
  const formStatus = document.getElementById('formStatus');
  const submitButton = contactForm.querySelector('button[type="submit"]');

  // Add submit event listener
  contactForm.addEventListener('submit', function(e) {
    // The main form handling is in the contact.html file
    // This is just a fallback in case the server is not available
    
    // If formSubmitAttempted is true, it means the main handler failed
    if (window.formSubmitAttempted) {
      e.preventDefault();
      
      // Get form data
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value || 'Contact Form Submission';
      const message = document.getElementById('message').value;
      
      // Create mailto link as fallback
      const mailtoLink = `mailto:gorulevishal984@gmail.com?subject=${encodeURIComponent('Portfolio Contact: ' + subject)}&body=${encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message)}`;
      
      // Show fallback message
      formStatus.style.display = 'block';
      formStatus.innerHTML = `
        <div class="alert alert-warning">
          <p>The server-side form submission is not available.</p>
          <p>Please click the button below to open your email client:</p>
          <a href="${mailtoLink}" class="btn btn-primary">Send via Email Client</a>
        </div>
      `;
    }
  });

  // Function to check if the server is available
  function checkServerAvailability() {
    fetch('/submit-form', { method: 'HEAD' })
      .then(response => {
        if (!response.ok) {
          window.formSubmitAttempted = true;
        }
      })
      .catch(() => {
        window.formSubmitAttempted = true;
        
        // Add a note to the form
        const noteDiv = document.createElement('div');
        noteDiv.className = 'alert alert-info mt-3';
        noteDiv.innerHTML = 'Note: If the form submission fails, a fallback option will be provided.';
        contactForm.appendChild(noteDiv);
      });
  }

  // Check server availability when the page loads
  checkServerAvailability();
});
