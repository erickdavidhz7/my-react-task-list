import { useState, useEffect } from "react";

export function useTasks() {
  const defaultId = localStorage.getItem("id") ? parseInt(localStorage.getItem("id")) : 0;
  const [tareasList, setTarea] = useState([]);
  const [id, setId] = useState(defaultId);

  function addTarea(nuevaTarea) {
    const tareaObjeto = {
      tareaId: id,
      nombreTarea: nuevaTarea,
      descripcion: "Descripción: template",
      estadoTarea: false,
    };

    let nuevaTareasList = [...tareasList, tareaObjeto];
    setTarea(nuevaTareasList);
    setId(id + 1);
    localStorage.setItem("tareasList", JSON.stringify(nuevaTareasList));
    localStorage.setItem("id", id + 1);
  }

  function deleteTarea(tareaid) {
    let nuevaTareasList = [...tareasList];
    nuevaTareasList.splice(tareaid, 1);
    setTarea(nuevaTareasList);
    localStorage.setItem("tareasList", JSON.stringify(nuevaTareasList)); 
  }

  function editarTarea(tareaid, nuevoNombreTarea, nuevaDescripcionTarea){
    let nuevaTareasList = [...tareasList];
    console.log(nuevaTareasList);
    nuevaTareasList[tareaid].nombreTarea = nuevoNombreTarea;
    nuevaTareasList[tareaid].descripcion = nuevaDescripcionTarea;
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


  return [tareasList, setTarea, addTarea, deleteTarea, editarTarea];
}
