import "./App.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import ContextoTask from "./context/ContextoTask";
import Footer from "./components/Footer";

function App() {

  return (
    <>
    <ContextoTask>
      <Header/>
      <TaskList/>
      <Footer/>
      </ContextoTask>
    </>
  );
}

export default App;
