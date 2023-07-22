import "./App.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import ContextTask from "./context/ContextoTask";

function App() {

  return (
    <>
    <ContextTask>
      <Header/>
      <TaskList/>
      </ContextTask>
    </>
  );
}

export default App;
