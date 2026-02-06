# Vishal Gorule — AI Systems Engineer Portfolio

A modern, cyberpunk-themed personal portfolio built as a **production-grade React application**, showcasing my work in AI systems, machine learning, and applied engineering.

This portfolio itself is designed as a real system — clean architecture, reusable components, and automated deployment.

---

## 🌐 Live Website

👉 **[https://portfolio-website-ugwq.onrender.com/](https://portfolio-website-ugwq.onrender.com/)**
*(Automatically deployed on every push to `main`)*

---

## 🧠 What This Is

This is **not** a static HTML site or a template.

It is:

* A **React + Vite** single-page application
* Fully component-driven
* Styled with a custom **cyberpunk / futuristic design system**
* Deployed via **CI/CD (GitHub Actions + Render)**

The goal was to build something that reflects how I approach real systems:

> intentional structure, minimal noise, and production thinking.

---

## 🧩 Features

* ⚛️ **React + Vite** (fast, modern frontend stack)
* 🎨 **Custom cyberpunk UI** (dark theme, neon green accents)
* 🧱 **Reusable components** (Hero, Projects, Skills, Navbar, Contact)
* 📦 **Data-driven sections**
* 🚀 **CI/CD enabled**

  * Push to `main` → build → deploy automatically
* 📱 Fully responsive
* ♿ Accessible focus states and keyboard navigation

---

## 🏗️ Tech Stack

**Frontend**

* React
* Vite
* CSS (modular, component-scoped)
* Framer Motion

**DevOps**

* GitHub Actions (CI)
* Render (CD & hosting)

---

## 📂 Project Structure

```text
portfolio/
├── public/
│   └── assets/
│       ├── icons/
│       ├── images/
│       └── resume/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── ProjectCard.jsx
│   │   └── SkillCard.jsx
│   │
│   ├── sections/
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── Contact.jsx
│   │
│   ├── styles/
│   │   ├── base.css
│   │   ├── hero.css
│   │   ├── project-card.css
│   │   ├── projects.css
│   │   ├── skills.css
│   │   ├── navbar.css
│   │   └── contact.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── render.yaml
└── .github/workflows/deploy.yml
```

---

## 🔄 CI/CD Workflow

The site uses **continuous integration and deployment**:

1. Code pushed to `main`
2. GitHub Actions runs build (`npm run build`)
3. Render automatically deploys the latest build

This ensures:

* Zero manual publishing
* Always-live latest version
* Clean rollback path

---

## 🛠️ Local Development

```bash
npm install
npm run dev
```

Runs locally at:

```
http://localhost:5173
```

---

## 🎯 Design Philosophy

* Minimal but expressive
* Motion only when it adds meaning
* No visual noise, no fake metrics
* UI should feel like a **systems dashboard**, not a landing page

---

## 📬 Connect With Me

* 🌐 Portfolio: [https://portfolio-website-ugwq.onrender.com/](https://portfolio-website-ugwq.onrender.com/)
* 🧑‍💻 GitHub: [https://github.com/VisionExpo](https://github.com/VisionExpo)
* 💼 LinkedIn: [https://www.linkedin.com/in/vishal-gorule/](https://www.linkedin.com/in/vishal-gorule/)
* ✍️ Medium: [https://medium.com/@gorulevishal984](https://medium.com/@gorulevishal984)
* 📸 Instagram: `@vishu_gorule_0909`

---

## 📄 License

This project is licensed under the **MIT License**.

