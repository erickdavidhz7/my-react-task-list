import { useContext, useState } from "react";
import { MiContexto } from "../context/crearContexto";

export default function TaskInput() {
  const [inputTarea, setInputTarea] = useState("");
  const [inputDescripcion, setInputDescripcion] = useState("");
  const { addTarea } = useContext(MiContexto);
  const handleNuevaTareaClick = () => {
    if (inputTarea.length > 3) {
      addTarea(inputTarea, inputDescripcion);
      setInput("");
    } else {
      alert("La tarea debe tener más de 3 caracteres!");
    }
  };

  return (
    <div className="inputBar">
      <form id="formularioTarea">
        <input
          id="txt1"
          type="text"
          name="txt1"
          placeholder="Ingrese nueva tarea"
          onChange={(e) => {
            setInputTarea(e.target.value);
          }}
          value={inputTarea}
        />
        <input
          id="txt2"
          type="text"
          name="txt2"
          placeholder="Ingrese una descripción"
          onChange={(e) => {
            setInputDescripcion(e.target.value);
          }}
          value={inputDescripcion}
        />
        <input type="submit" id="boton" value="Añadir" onClick={handleNuevaTareaClick} />
      </form>
    </div>
  );
}
