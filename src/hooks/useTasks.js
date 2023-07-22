import { useState, useEffect } from "react";

export function useTasks() {
  const defaultId = localStorage.getItem("id") ? parseInt(localStorage.getItem("id")) : 0;
  const [tareasList, setTarea] = useState([]);
  const [id, setId] = useState(defaultId);

  function addTarea(nuevaTarea) {
    const tareaObjeto = {
      id: id,
      nombre: nuevaTarea,
      descripcion: "Descripción: template",
      estado: false,
    };

    let nuevaTareasList = [...tareasList, tareaObjeto];
    setTarea(nuevaTareasList);
    setId(id + 1);
    localStorage.setItem("tareasList", JSON.stringify(nuevaTareasList));
    localStorage.setItem("id", id + 1);
  }

  function deleteTarea(tareaid) {
    let nuevaTareasList = tareasList.filter((tarea) => tarea.id !== tareaid);
    setTarea(nuevaTareasList);
    localStorage.setItem("tareasList", JSON.stringify(nuevaTareasList));
  }

  function editarTarea(tareaid, nuevoNombreTarea, nuevaDescripcionTarea) {
    let nuevaTareasList = [...tareasList];
    const indiceTarea = nuevaTareasList.findIndex((tarea) => tareaid === tarea.id);
    nuevaTareasList[indiceTarea].nombre = nuevoNombreTarea;
    nuevaTareasList[indiceTarea].descripcion = nuevaDescripcionTarea;
    setTarea(nuevaTareasList);
    localStorage.setItem("tareasList", JSON.stringify(nuevaTareasList));
  }

  function checkTarea(tareaid){
    let nuevaTareasList = [...tareasList];
    const indiceTarea = nuevaTareasList.findIndex((tarea) => tareaid === tarea.id);
    nuevaTareasList[indiceTarea].estado = !nuevaTareasList[indiceTarea].estado;
    setTarea(nuevaTareasList);
    localStorage.setItem("tareasList", JSON.stringify(nuevaTareasList));
  }

  useEffect(() => {
    const localStorageData = localStorage.getItem("tareasList");
    if (localStorageData) {
      try {
        const storedTareas = JSON.parse(localStorageData);
        setTarea(storedTareas);
      } catch (err) {
        console.error("Error parsing new taks from localStorage");
      }
    }
  }, []);

  return [tareasList, setTarea, addTarea, deleteTarea, editarTarea, checkTarea];
}
