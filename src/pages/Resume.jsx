import { studies, experiences } from "../data/resume";

export default function Resume() {
  return (
    <div>
      <h1>Currículum</h1>

      <h2>Experiencia</h2>
      {experiences.map((exp) => (
        <div key={exp.id}>
          <h3>{exp.title} - {exp.company}</h3>
          <p>{exp.date}</p>
        </div>
      ))}

      <h2>Educación</h2>
      {studies.map((edu) => (
        <div key={edu.id}>
          <h3>{edu.title} - {edu.institution}</h3>
          <p>{edu.date}</p>
        </div>
      ))}
    </div>
  );
}
