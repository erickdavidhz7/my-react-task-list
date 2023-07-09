import Task from "./Task";

export default function TaskList(){
    const tareas = [{
        nombreTarea: "Tarea 1"
    },{
        nombreTarea: "Tarea 2"
    },{
        nombreTarea: "Tarea 3"
    },{
        nombreTarea: "Tarea 4"
    },{
        nombreTarea: "Tarea 5"
    },
]


    return (
        <div>
            {tareas.map(tarea =>{
                return(
                <Task id="" nombreTarea={tarea.nombreTarea}></Task>
                )
            })}
        </div>
    )
}