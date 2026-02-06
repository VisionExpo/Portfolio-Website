import ProjectCard from "../components/ProjectCard";
import "../styles/projects.css";

// TEMP data — replace with src/data/projects.js later if you haven't yet
const projects = [
  {
    title: "Chicken Disease Detection",
    description:
      "CNN-based image classification system for detecting poultry diseases from visual symptoms.",
    image: "/assets/Images/Project/chicken_disease_detection.jpg",
    tech: ["CNN", "TensorFlow", "Computer Vision"],
    github: "https://github.com/your-username/chicken-disease-detection"
  },
  {
    title: "Solar Panel Fault Detection",
    description:
      "Machine learning system for identifying and classifying faults in solar panels.",
    image: "/assets/Images/Project/solar_panel_fault_dection.jpg",
    tech: ["Machine Learning", "Fault Detection"],
    github: "https://github.com/your-username/solar-panel-fault-detection"
  }
];

export default function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-header">
        <h2 className="projects-title">Projects</h2>
        <p className="projects-subtitle">
          Selected systems I’ve built across computer vision, ML, and applied AI.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
