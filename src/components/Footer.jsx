import { useContext } from "react";
import { MiContexto } from "../context/crearContexto";

export default function Footer() {
  const { tareasList, deleteAllTareas } = useContext(MiContexto);
  let numeroTareasPendientes = tareasList.filter((tarea) => !tarea.estado).length;

  const eliminarTodasTareas = () => {
    deleteAllTareas();
  };
  return (
    <div className="Footer">
      <p>Tienes {numeroTareasPendientes} tareas pendientes</p>
      <button type="button" id="eliminarTodasTarea" onClick={eliminarTodasTareas}>
        Limpiar Todo
      </button>
    </div>
  );
}
