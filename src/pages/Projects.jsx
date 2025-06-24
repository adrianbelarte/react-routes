import  projects  from "../data/projects";

export default function Projects() {
  return (
    <div>
      <h1>Proyectos</h1>
      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.name}</h2>
          <img src={project.image} alt={project.name} />
          <p>{project.description}</p>
          <a href={project.url} target="_blank">Ver proyecto</a>
        </div>
      ))}
    </div>
  );
}
