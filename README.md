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

```
http://localhost:8000/templates/index.html
```

## Deployment on Render

This portfolio website can be easily deployed on Render's free static site hosting:

1. **Create a Render account**:
   - Sign up at [render.com](https://render.com)
   - Connect your GitHub account

2. **Create a new Static Site**:
   - From the Render dashboard, click "New" and select "Static Site"
   - Connect to your GitHub repository
   - Use the following settings:
     - **Name**: portfolio-website (or your preferred name)
     - **Branch**: main
     - **Build Command**: (leave empty)
     - **Publish Directory**: ./

3. **Deploy the site**:
   - Click "Create Static Site"
   - Render will automatically deploy your website
   - You'll get a URL like `https://portfolio-website.onrender.com`

4. **Custom Domain (Optional)**:
   - In your site's settings, go to "Custom Domain"
   - Follow the instructions to add your domain

The site will automatically redeploy whenever you push changes to your GitHub repository.

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

- Email: gorulevishal984@gmail.com
- Phone: +91 9172838972
- Location: Pune, Maharashtra, India
