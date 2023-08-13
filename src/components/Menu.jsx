import { Link } from "react-router-dom";
import Toggle from "./Toggle";
import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";

export default function Menu() {
  return (
    <div className="Menu">
      <Breadcrumb separator="-">
        <BreadcrumbItem>
          {" "}
          <Link className="linksMenu" to="/">
            Home
          </Link>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <Link className="linksMenu" to="/tareas">
            Aplicación de Tareas
          </Link>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <Link className="linksMenu" to="/Sobre_Nosotros">
            Sobre Nosotros
          </Link>
        </BreadcrumbItem>
      </Breadcrumb>
      -
      <Toggle />
    </div>
  );
}
