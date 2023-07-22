import { useState, useContext } from "react";
import { MiContexto } from "../context/crearContexto";
import TaskEdit from "./TaskEdit";

export default function Task(props) {
  const { idTarea, nombreTarea, estadoTarea, descripcion } = props;
  const { deleteTarea } = useContext(MiContexto);
  const [checkeado, setCheckeado] = useState(false);
  const [isShown, setIsShown] = useState(false);

  const handleChange = (event) => {
    setCheckeado(event.target.checked);
  };

  const strikeThrough = (text) => {
    return text
      .split("")
      .map((char) => char + "\u0336")
      .join("");
  };

  const handleEliminarTareaClick = () => {
    deleteTarea(idTarea);
  };

  const handleEditarTareaClick = event => {
        setIsShown(current => !current);
  }


  return (
    <>
    {isShown ? (
      <TaskEdit idTarea={idTarea} nombreTarea={nombreTarea} estadoTarea={estadoTarea} descripcion={descripcion} setIsShown={setIsShown}/>
    ):     <div className="task">
    <form id="tituloTarea">
      <input id="checkTarea" type="checkbox" onChange={handleChange} />
      <label id="nombreTarea">{checkeado ? strikeThrough(nombreTarea) : nombreTarea}</label>
    </form>
    <div id="botonesTarea">
      <button type="button" id="editarTarea" onClick={handleEditarTareaClick}>Editar</button>
      <button type="button" id="eliminarTarea" onClick={handleEliminarTareaClick}>
        Eliminar
      </button>
    </div>
    <p id="descripcionTarea">{descripcion}</p>

  </div>}

    </>
  );
}
