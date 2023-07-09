
export default function Header(){
    return(
        <div className="headerComp">
        <h1>Listado de Tareas</h1>
        <form id="formularioTarea" action="">
      <input id="txt1" type="text" value="Añadir Tarea" />
      <button id = "boton">Añadir</button>
        </form>

        </div>
    )
}