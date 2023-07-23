import "./App.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import ContextoTask from "./context/ContextoTask";

function App() {

  return (
    <>
    <ContextoTask>
      <Header/>
      <TaskList/>
      </ContextoTask>
    </>
  );
}

export default App;
