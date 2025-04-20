# Vishal Gorule Portfolio Website

A professional portfolio website showcasing skills, projects, and blogs in AI/ML and software development. Built to provide a clean, interactive experience for visitors, featuring responsive design and user-friendly navigation.

## Live Website

Visit my portfolio website: [https://portfolio-website-ugwq.onrender.com](https://portfolio-website-ugwq.onrender.com)

![Portfolio Screenshot](Assets/Images/portfolio-screenshot.jpg)

## Project Structure

```text
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
├── form-setup/          # Contact form documentation
│   ├── README.md        # Overview of form setup
│   ├── CONTACT_FORM_README.md # Detailed form documentation
│   ├── FORMSPREE_SETUP_GUIDE.md # Formspree setup instructions
│   ├── FORMSPREE_TROUBLESHOOTING.md # Troubleshooting guide
│   └── test-form.html   # Simple test form for troubleshooting
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

## How to Run Locally

1. Make sure you have Python installed
2. Open a terminal/command prompt in the project directory
3. Run the following command:

```bash
python -m http.server 8000
```

4. Open your browser and navigate to:

```text
http://localhost:8000/templates/index.html
```

## Deployment Status

### Live Website

The portfolio website is currently deployed on Render and can be accessed at:
[https://portfolio-website-ugwq.onrender.com](https://portfolio-website-ugwq.onrender.com)

### Deployment Details

- **Hosting Platform**: Render (Static Site)
- **Deployment**: Automatic from GitHub repository
- **Branch**: main

The site automatically redeploys whenever changes are pushed to the GitHub repository, ensuring that the live website always reflects the latest updates.

### Future Updates

To update the website:

1. Make changes to the local repository
2. Commit and push to GitHub
3. Render will automatically deploy the changes (usually within 1-2 minutes)

### Custom Domain (Future Enhancement)

Currently using Render's subdomain, but can be configured with a custom domain by:

- Adding a custom domain in Render settings
- Configuring DNS records with the domain registrar
- Setting up SSL certificate (automatically handled by Render)

## Contact Form

The contact form uses Formspree to handle form submissions:

1. Form submissions are sent to your email via Formspree
2. After submission, users are redirected to a thank-you page
3. No server-side code or email configuration is needed

For more details, see the documentation in the `form-setup` folder, which includes:

- Setup instructions
- Troubleshooting guide
- Test form for verification

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Bootstrap 4
- GSAP (GreenSock Animation Platform)
- Formspree (for contact form functionality)

## Contact

- Email: [gorulevishal984@gmail.com](mailto:gorulevishal984@gmail.com)
- LinkedIn: [linkedin.com/in/vishal-gorule](https://www.linkedin.com/in/vishal-gorule/)
- GitHub: [github.com/VisionExpo](https://github.com/VisionExpo)
- Instagram: [instagram.com/vishu_gorule_0909](https://www.instagram.com/vishu_gorule_0909/)
- Location: Pune, Maharashtra, India
