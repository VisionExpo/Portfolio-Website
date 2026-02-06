import "../styles/contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <h2 className="contact-title">Contact</h2>
        <p className="contact-subtitle">
          If you want to collaborate, discuss systems, or explore ideas — feel free to reach out.
        </p>

        <div className="contact-links">
          <a href="mailto:vishalgorule@gmail.com">
            vishalgorule@gmail.com
          </a>

          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/your-linkedin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
