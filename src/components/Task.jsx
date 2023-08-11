import { useState, useContext } from "react";
import { MiContexto } from "../context/crearContexto";
import TaskEdit from "./TaskEdit";
import Checkbox from "./Checkbox";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";


export default function Task(props) {
  const { idTarea, nombreTarea, estadoTarea, descripcion } = props;
  const { deleteTarea, checkTarea } = useContext(MiContexto);
  const [checkeado, setCheckeado] = useState(estadoTarea);
  const [isShown, setIsShown] = useState(false);

  const handleChange = (event) => {
    setCheckeado(event.target.checked);
    checkTarea(idTarea);
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

  const handleEditarTareaClick = () => {
    setIsShown((current) => !current);
  };

  return (
    <>
      {isShown ? (
        <TaskEdit idTarea={idTarea} nombreTarea={nombreTarea} estadoTarea={estadoTarea} descripcion={descripcion} setIsShown={setIsShown} />
      ) : (
        <div className="task">
          {
            <form id="tituloTarea">
              <Checkbox onChange={handleChange} defaultChecked={checkeado} />
              <label id="nombreTarea">{checkeado ? strikeThrough(nombreTarea) : nombreTarea}</label>
            </form>
          }
          <div id="botonesTarea">
            <IconButton icon={<EditIcon />} type="button" id="editarTarea" onClick={handleEditarTareaClick}></IconButton>
            <IconButton icon={<DeleteIcon />} type="button" id="eliminarTarea" onClick={handleEliminarTareaClick}></IconButton>
          </div>
          <p id="descripcionTarea">{descripcion}</p>
        </div>
      )}
    </>
  );
}
