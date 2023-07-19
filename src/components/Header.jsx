import { useState } from "react";
import Task from "./Task";
import { useTasks } from "../hooks/useTasks";

export default function Header() {
  const [tareasList, addTarea] = useTasks();
  const [input, setInput] = useState("");
  const handleNuevaTareaClick = () => {
    addTarea(input);
  };

  return (
    <div className="headerComp">
      <h1 className="titulo">Listado de Tareas</h1>
      <div className="inputBar">
        <form id="formularioTarea" action="">
          <input id="txt1" type="text" onChange={(e) => setInput(e.target.value)} name="txt1" placeholder="Ingrese nueva tarea" />
          <button onClick={handleNuevaTareaClick} id="boton">
            Añadir
          </button>
        </form>
      </div>
      <div>
        {tareasList.map((tarea, id) => {
          return <Task key={id} id={id} nombreTarea={tarea.nombreTarea} estadoTarea={tareasList.estadoTarea} descripcion={tarea.descripcion}></Task>;
        })}
      </div>
    </div>
  );
}
