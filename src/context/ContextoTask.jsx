import { MiContexto } from "./crearContexto"
import { useTasks } from "../hooks/useTasks"
    
const ContextTask = ({children}) =>{
    const [tareasList,setTarea, addTarea, deleteTarea, editarTarea] = useTasks();
    return(
        <>
        <MiContexto.Provider value={{tareasList, setTarea, addTarea, deleteTarea, editarTarea}}>
            {children}
        </MiContexto.Provider>
        </>
    )
}

export default ContextTask;