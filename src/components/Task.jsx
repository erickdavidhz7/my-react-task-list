
export default function Task({nombreTarea}){

    function strikeThrough(text) {
        return text
          .split('')
          .map(char => char + '\u0336')
          .join('')
      }

    const verificarTarea =(nombreTarea, estadoTarea)=>{
        if(estadoTarea){
            return nombreTarea
        }else{
            return strikeThrough(nombreTarea)
        }
    }


    return(
    <div className="task">
        <form>
        <input id="checkTarea" type="checkbox" />
        <label>{verificarTarea(nombreTarea, true)}</label>
        <button>Editar</button>
        <button>Eliminar</button>
        </form>
        
    </div>
    )
}