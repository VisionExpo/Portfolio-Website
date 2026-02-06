import SkillCard from "../components/SkillCard";
import "../styles/skills.css";

// TEMP inline data (we’ll move to src/data/skills.js later)
const skills = [
  {
    name: "Python",
    icon: "/assets/Icons/Skills and Tools/python.png",
  },
  {
    name: "PyTorch",
    icon: "/assets/Icons/Skills and Tools/pytorch.png",
  },
  {
    name: "TensorFlow",
    icon: "/assets/Icons/Skills and Tools/tensorflow.png",
  },
  {
    name: "AWS",
    icon: "/assets/Icons/Skills and Tools/aws.png",
  },
  {
    name: "NumPy",
    icon: "/assets/Icons/Skills and Tools/numpy.png",
  },
  {
    name: "Pandas",
    icon: "/assets/Icons/Skills and Tools/pandas.png",
  },
  {
    name: "scikit-learn",
    icon: "/assets/Icons/Skills and Tools/sklearn.png",
  },
];

export default function Skills() {
  return (
    <section className="skills-section">
      <div className="skills-header">
        <h2 className="skills-title">Skills</h2>
        <p className="skills-subtitle">
          Tools and technologies I use to build production-grade AI systems.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
}
