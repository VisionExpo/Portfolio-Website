import "../styles/skills.css";

export default function SkillCard({ skill }) {
  return (
    <div className="skill-card">
      <div className="skill-icon-wrapper">
        <img
          src={skill.icon}
          alt={skill.name}
          className="skill-icon"
        />
      </div>

      <h4 className="skill-name">{skill.name}</h4>
    </div>
  );
}
