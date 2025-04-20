# Vishal Gorule Portfolio Website

A professional portfolio website showcasing skills, projects, and blogs in AI/ML and software development. Built to provide a clean, interactive experience for visitors, featuring responsive design and user-friendly navigation.

## Project Structure

```
Portfolio-Website/
│
├── templates/           # Contains all HTML files
│   ├── index.html       # Home/About page
│   ├── projects.html    # Projects showcase
│   ├── skills.html      # Skills and expertise
│   ├── blogs.html       # Blog articles
│   ├── contact.html     # Contact information and form
│   └── thank-you.html   # Thank you page after form submission
│
├── static/              # Contains static assets
│   ├── css/             # CSS files
│   │   ├── styles.css   # Main styles
│   │   └── chatbot.css  # Chatbot styles
│   │
│   └── js/              # JavaScript files
│       ├── animations.js # Animation and navigation
│       └── chatbot.js    # Chatbot functionality
│
└── Assets/              # Images and other assets
    ├── Icons/           # Icon images
    ├── Images/          # Content images
    └── Resume/          # Resume PDF
```

## Features

- Responsive design that works on all devices
- Interactive chatbot for easy navigation
- Animated elements using GSAP
- Separate pages for different sections
- Contact form with Formspree integration
- Thank you page after form submission

## How to Run

1. Make sure you have Python installed
2. Open a terminal/command prompt in the project directory
3. Run the following command:

```
python -m http.server 8000
```

4. Open your browser and navigate to:

```
http://localhost:8000/templates/index.html
```

## Contact Form

The contact form uses Formspree to handle form submissions:

1. Form submissions are sent to your email via Formspree
2. After submission, users are redirected to a thank-you page
3. No server-side code or email configuration is needed

For more details, see the `CONTACT_FORM_README.md` file.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Bootstrap 4
- GSAP (GreenSock Animation Platform)
- Formspree (for contact form functionality)

## Contact

- Email: gorulevishal984@gmail.com
- Phone: +91 9172838972
- Location: Pune, Maharashtra, India
