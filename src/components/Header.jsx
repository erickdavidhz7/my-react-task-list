import { useEffect, useState } from "react";
import TaskList from "./TaskList";

export default function Header() {
  const [tareasList, setTarea] = useState([]);
  let tareaID = 1;
  const handleNuevaTareaClick = () => {
    let nuevaTarea = document.getElementById("txt1").value;

    const tareaObjeto = {
      nombreTarea: nuevaTarea,
      descripcion: "Descripción: template",
      estadoTarea: false,
    };

    let nuevaTareasList = [...tareasList, tareaObjeto];

    setTarea([...tareasList, nuevaTareasList]);
    tareaID += 1;
    localStorage.setItem("tareasList", JSON.stringify(nuevaTareasList));
  };

  useEffect(() => {
    const localStorageData = localStorage.getItem("tareasList");
    if (localStorageData) {
      try {
        const storedTareas = JSON.parse(localStorageData);
        setTarea(storedTareas);
      } catch (err) {
        console.err("Error parsing new taks from localStorage");
      }
    }
  }, []);

  return (
    <div className="headerComp">
      <h1>Listado de Tareas</h1>
      <form id="formularioTarea" action="">
        <input id="txt1" type="text" name="txt1" />
        <button onClick={handleNuevaTareaClick} id="boton">
          Añadir
        </button>
      </form>
      <div>
       <TaskList tareasList={tareasList}/>
      </div>
    </div>
  );
}
