import { useState } from "react";

export default function Task(props) {
  const { nombreTarea, estadoTarea, descripcion, stateChanger} = props;
  const { tareasList } = props;
  const [checkeado, setCheckeado] = useState(false);

  const handleChange = (event) => {
    setCheckeado(event.target.checked);
  };

  const strikeThrough = (text) => {
    return text
      .split("")
      .map((char) => char + "\u0336")
      .join("");
  };

  const editarTareaDescripcion = (nombreTarea) => {
    const nuevoEstadoTarea = tareasList.map((tarea) => {
      if (tarea.nombreTarea === nombreTarea) {
        return { ...tarea, descripcion: "¡Se ha cambiado la descripción!" };
      }
      return tarea;
    });

    stateChanger(nuevoEstadoTarea);
  };

  return (
    <div className="task">
      <form id="tituloTarea">
        <input id="checkTarea" type="checkbox" onChange={handleChange} />
        <label id="nombreTarea">{checkeado ? strikeThrough(nombreTarea) : nombreTarea}</label>
      </form>
      <div id="botonesTarea">
      <button id="editarTarea" onClick={() => editarTareaDescripcion(nombreTarea)}>Editar</button>
      <button id="eliminarTarea">Eliminar</button>
      </div>
      <p id="descripcionTarea">{descripcion}</p>
    </div>
  );
}
