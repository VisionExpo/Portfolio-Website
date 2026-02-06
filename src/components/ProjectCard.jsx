import "../styles/project-card.css";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-image-wrapper">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>

        <p className="project-description">
          {project.description}
        </p>

        <div className="project-tech">
          {project.tech.map((tech) => (
            <span key={tech} className="tech-pill">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
