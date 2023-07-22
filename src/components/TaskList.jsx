import { MiContexto } from "../context/crearContexto";
import Task from "./Task";
import { useContext } from "react";

export default function TaskList() {
  const { tareasList } = useContext(MiContexto);
  return (
    <div>
      {tareasList.map((tarea, index) => {
        return <Task key={tarea.tareaId} id={`tarea-${tarea.tareaId}`} idTarea={tarea.tareaId} nombreTarea={tarea.nombreTarea} estadoTarea={tareasList.estadoTarea} descripcion={tarea.descripcion}></Task>;
      })}
    </div>
  );
}
