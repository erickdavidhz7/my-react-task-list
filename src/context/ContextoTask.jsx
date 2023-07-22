import { MiContexto } from "./crearContexto"
import { useTasks } from "../hooks/useTasks"
    
const ContextTask = ({children}) =>{
    const [tareasList,setTarea, addTarea, deleteTarea] = useTasks();
    return(
        <>
        <MiContexto.Provider value={{tareasList, setTarea, addTarea, deleteTarea}}>
            {children}
        </MiContexto.Provider>
        </>
    )
}

export default ContextTask;