import { MiContexto } from "../context/crearContexto";
import Task from "./Task";
import { useContext } from "react";

export default function TaskList() {
  const { tareasList } = useContext(MiContexto);
  return (
    <div className="listaTask">
      {tareasList.map((tarea) => {
        return <Task key={tarea.id} id={`tarea-${tarea.id}`} idTarea={tarea.id} nombreTarea={tarea.nombre} estadoTarea={tarea.estado} descripcion={tarea.descripcion}></Task>;
      })}
    </div>
  );
}
