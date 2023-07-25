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