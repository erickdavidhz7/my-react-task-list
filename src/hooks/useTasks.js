import { useState, useEffect } from "react";

export function useTasks() {
  //const defaultId = localStorage.getItem("id") ? parseInt(localStorage.getItem("id")) : 0;
  let defaultId = localStorage.getItem("id") ?? 0; // nullish coalescing/ coalescencia nula
  defaultId = parseInt(defaultId);
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

  function deleteTarea(id) {
    let nuevaTareasList = tareasList.filter((tarea) => tarea.id !== id);
    setTarea(nuevaTareasList);
    localStorage.setItem("tareasList", JSON.stringify(nuevaTareasList));
  }

  function editarTarea(id, nombre, decripcion) {
    let nuevaTareasList = [...tareasList];
    const indiceTarea = nuevaTareasList.findIndex((tarea) => id === tarea.id);
    nuevaTareasList[indiceTarea].nombre = nombre;
    nuevaTareasList[indiceTarea].descripcion = decripcion;
    setTarea(nuevaTareasList);
    localStorage.setItem("tareasList", JSON.stringify(nuevaTareasList));
  }

  function checkTarea(id) {
    let nuevaTareasList = [...tareasList]; // operador de dispersión/ spread operator
    const indiceTarea = nuevaTareasList.findIndex((tarea) => id === tarea.id);
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
