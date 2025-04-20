# Vishal Gorule Portfolio Website

A professional portfolio website showcasing skills, projects, and blogs in AI/ML and software development.

## Project Structure

```
Portfolio-Website/
│
├── templates/           # Contains all HTML files
│   ├── index.html       # Home/About page
│   ├── projects.html    # Projects showcase
│   ├── skills.html      # Skills and expertise
│   ├── blogs.html       # Blog articles
│   └── contact.html     # Contact information and form
│
├── static/              # Contains static assets
│   ├── css/             # CSS files
│   │   ├── styles.css   # Main styles
│   │   └── chatbot.css  # Chatbot styles
│   │
│   └── js/              # JavaScript files
│       ├── animations.js # Animation and navigation
│       ├── chatbot.js    # Chatbot functionality
│       └── form-handler.js # Contact form handling
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
- Contact form with email functionality
- Fallback options for form submission

## How to Run (Static Version)

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

## How to Run (With Email Functionality)

1. Make sure you have Python installed
2. Install the required dependencies:

```
pip install -r requirements.txt
```

3. Configure your email settings (see email_setup_guide.md for details)

4. Run the Flask application:

```
python app.py
```

5. Open your browser and navigate to:

```
http://localhost:8000
```

## Email Configuration

To enable the contact form to send emails:

1. Follow the instructions in `email_setup_guide.md`
2. Set up your Gmail account for SMTP access
3. Configure the environment variables or update the app.py file with your credentials

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Bootstrap 4
- GSAP (GreenSock Animation Platform)
- Python/Flask (for server-side functionality)
- SMTP (for email functionality)

## Contact

- Email: gorulevishal984@gmail.com
- Phone: +91 9172838972
- Location: Pune, Maharashtra, India
