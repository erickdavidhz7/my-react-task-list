import { useContext, useState } from "react";
import { MiContexto } from "../context/crearContexto";

export default function Header() {
  const { addTarea } = useContext(MiContexto);
  const [input, setInput] = useState("");
  const handleNuevaTareaClick = () => {
    addTarea(input);
    setInput("");
  };

  return (
    <div className="headerComp">
      <h1 className="titulo">Listado de Tareas</h1>
      <div className="inputBar">
        <form id="formularioTarea" action="">
          <input id="txt1" type="text" onChange={(e) => setInput(e.target.value)} value={input} name="txt1" placeholder="Ingrese nueva tarea" />
          <button type="button" onClick={handleNuevaTareaClick} id="boton">
            {" "}
            {/* ponerle atributo type button para evitar que la página se refresque al presionar el botón */}
            Añadir
          </button>
        </form>
      </div>
    </div>
  );
}
