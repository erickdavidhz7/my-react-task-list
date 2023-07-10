import { useState } from "react";

export default function Task(props, stateChanger){
    const {nombreTarea, estadoTarea, descripcion } = props;
    const {tareasList} = props;

    const [checkeado, setCheckeado] = useState(false);

    const handleChange = (event) =>{
        setCheckeado(event.target.checked);
    }

    const strikeThrough = (text) =>{
        return text
          .split('')
          .map(char => char + '\u0336')
          .join('')
      }

    const editarTareaDescripcion = () => {
        const nuevoEstadoTarea = tareasList.map(tarea =>{
            if(tarea.nombreTarea == nombreTarea){
                return {...tarea , descripcion: "¡Se ha cambiado la descripción!"}
            }

            return tarea;
        });

        return nuevoEstadoTarea;
        
    }

    return(
    <div className="task">
        <form>
        <input id="checkTarea" type="checkbox" onChange={handleChange} />
        <label>{checkeado ? strikeThrough(nombreTarea) : nombreTarea }</label>
        <button id="editarTarea" onClick={() => stateChanger(editarTareaDescripcion)}>Editar</button>
        <button>Eliminar</button>
        </form>
        <p>{descripcion}</p>
    </div>
    )
}