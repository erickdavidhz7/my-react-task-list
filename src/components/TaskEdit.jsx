import { useContext, useState } from "react";
import { MiContexto } from "../context/crearContexto";
import { CloseIcon, CheckIcon } from "@chakra-ui/icons";
import { IconButton, Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react";

export default function TaskEdit(props) {
  const { idTarea, nombreTarea, descripcion, setIsShown } = props;
  const [inputNombre, setInputNombre] = useState(nombreTarea);
  const [inputDescripcion, setInputDescripcion] = useState(descripcion);

  const { editarTarea } = useContext(MiContexto);

  const handleGuardarCambiosClick = () => {
    editarTarea(idTarea, inputNombre, inputDescripcion);
    setIsShown((previous) => !previous);
  };

  const handleCancelarCambiosClick = () => {
    setIsShown((previous) => !previous);
  };

  return (
    <div className="task">
      <form id="tituloTarea">
        <label id="nombreTarea">
          <input id="nuevoNombreTarea" defaultValue={nombreTarea} type="text" onChange={(e) => setInputNombre(e.target.value)}></input>
        </label>
      </form>
      <div id="botonesTarea">
        <IconButton type="button" id="guardarEditarTarea" icon={<CheckIcon />} onClick={handleGuardarCambiosClick}></IconButton>
        <IconButton type="button" id="cancelarEditarTarea" icon={<CloseIcon />} onClick={handleCancelarCambiosClick}></IconButton>
      </div>
      <input id="nuevaDescripcionTarea" defaultValue={descripcion} type="text" onChange={(e) => setInputDescripcion(e.target.value)}></input>
    </div>
  );
}
