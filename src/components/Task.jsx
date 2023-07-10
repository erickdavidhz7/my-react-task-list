
export default function Task(props){
    const {nombreTarea, estadoTarea, descripcion } = props;

    function strikeThrough(text) {
        return text
          .split('')
          .map(char => char + '\u0336')
          .join('')
      }


    return(
    <div className="task">
        <form>
        <input id="checkTarea" type="checkbox" />
        <label>{nombreTarea}</label>
        <button>Editar</button>
        <button>Eliminar</button>
        </form>
        <p>{descripcion}</p>
    </div>
    )
}