import TaskInput from "./TaskInput";
export default function Header() {
  return (
    <div className="headerComp">
      <h1 className="titulo">Listado de Tareas</h1>
      <TaskInput />
    </div>
  );
}
