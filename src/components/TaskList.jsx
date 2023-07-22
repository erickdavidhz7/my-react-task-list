import { MiContexto } from "../context/crearContexto";
import Task from "./Task";
import { useContext } from "react";

export default function TaskList() {
  const { tareasList } = useContext(MiContexto);
  return (
    <div>
      {tareasList.map((tarea, id) => {
        return <Task key={id} id={`tarea-${id}`} idTarea={id} nombreTarea={tarea.nombreTarea} estadoTarea={tareasList.estadoTarea} descripcion={tarea.descripcion}></Task>;
      })}
    </div>
  );
}
