import { useContext, useState } from "react"
import { MiContexto } from "../context/crearContexto"
import Task from "./Task"

export default function TaskEdit(props){

    const { idTarea, nombreTarea, estadoTarea, descripcion, setIsShown } = props;
    const [inputNombre, setInputNombre] = useState(nombreTarea);
    const [inputDescripcion, setInputDescripcion] = useState(descripcion);

    const { editarTarea } = useContext(MiContexto);

  
    const handleGuardarCambiosClick = () =>{
        editarTarea(idTarea, inputNombre, inputDescripcion)
        setIsShown(previous => !previous);
    }

    return (
        <div className="task">
          <form id="tituloTarea">
            <label id="nombreTarea"><input id="nuevoNombreTarea" defaultValue={nombreTarea} type="text" onChange={(e) => setInputNombre(e.target.value)}></input></label>
          </form>
          <div id="botonesTarea">
            <button type="button" id="editarTarea" onClick={handleGuardarCambiosClick} >Guardar Cambios</button>
          </div>
          <p id="descripcionTarea">
            
            <input id="nuevaDescripcionTarea" defaultValue={descripcion} type="text" onChange={(e) => setInputDescripcion(e.target.value)}></input>
          </p>
        </div>
      );
}