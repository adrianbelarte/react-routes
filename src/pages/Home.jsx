import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Bienvenido al Portfolio</h1>
      <p>Soy un desarrollador web.</p>
      <nav>
        <Link to="/projects">Proyectos</Link>
        <Link to="/resume">Currículum</Link>
      </nav>
    </div>
  );
}
