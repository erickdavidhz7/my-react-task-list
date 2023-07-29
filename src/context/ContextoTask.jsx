import { MiContexto } from "./crearContexto"
import { useTasks } from "../hooks/useTasks"
    
const ContextoTask = ({children}) =>{
    const [tareasList,setTarea, addTarea, deleteTarea, deleteAllTareas,  editarTarea, checkTarea] = useTasks();
    return(
        <>
        <MiContexto.Provider value={{tareasList, setTarea, addTarea, deleteTarea, deleteAllTareas,  editarTarea, checkTarea}}>
            {children}
        </MiContexto.Provider>
        </>
    )
}

export default ContextoTask;