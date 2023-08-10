import { Link } from "react-router-dom";
import Toggle from "./Toggle";

export default function Menu() {
  return (
    <div className="Menu">
      <nav className="container-nav">
        <Link to="/">Home</Link>
        <Link to="/tareas">Tareas</Link>
        <Link to="/Sobre_Nosotros">Sobre Nosotros</Link>
      </nav>
      <Toggle />
    </div>
  );
}
