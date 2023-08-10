import HeaderTask from "../components/HeaderTask";
import TaskList from "../components/TaskList";
import ContextoTask from "../context/ContextoTask";
import FooterTask from "../components/FooterTask";

export default function Tareas() {
  return (
    <div>
      <ContextoTask>
        <HeaderTask />
        <TaskList />
        <FooterTask/>
      </ContextoTask>
    </div>
  );
}
