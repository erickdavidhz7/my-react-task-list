import { useState, useEffect } from "react"

export function useTasks(){
    const [tareasList, setTarea] = useState([]);
    const [id, setId] = useState(0);

    function addTarea(nuevaTarea){
        const tareaObjeto = {
            tareaid: id,
            nombreTarea: nuevaTarea,
            descripcion: "Descripción: template",
            estadoTarea: false,
          };
      
          let nuevaTareasList = [...tareasList, tareaObjeto];
          setTarea([...tareasList, nuevaTareasList]);
          setId((prev) => prev + 1);
          localStorage.setItem("tareasList", JSON.stringify(nuevaTareasList));

    }

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

    return [tareasList, addTarea]
}