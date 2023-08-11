import { Link } from "react-router-dom";
import Toggle from "./Toggle";

export default function Menu() {
  return (
    <div className="Menu">
      <nav className="container-nav">
        <Link className="linksMenu" to="/">Home</Link>
        <Link className="linksMenu" to="/tareas">Aplicación de Tareas</Link>
        <Link className="linksMenu" to="/Sobre_Nosotros">Sobre Nosotros</Link>
      </nav>
      <Toggle />
    </div>
  );
}
