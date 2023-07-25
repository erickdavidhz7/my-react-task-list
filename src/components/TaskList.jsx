import Task from "./Task";

export default function TaskList(props) {
    const {tareasList} = props;
  return (
    <div className="taskList">
      {tareasList.map((tarea, index) => {
        return <Task key={index} id={tarea.id} nombreTarea={tarea.nombreTarea} estadoTarea ={tareasList.estadoTarea}></Task>;
      })}
    </div>
  );
}
