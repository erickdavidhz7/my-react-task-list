import Header from "../components/Header";
import TaskList from "../components/TaskList";
import ContextoTask from "../context/ContextoTask";
import Footer from "../components/Footer";

export default function Tareas() {
  return (
    <div>
      <ContextoTask>
        <Header />
        <TaskList />
        <Footer />
      </ContextoTask>
    </div>
  );
}
