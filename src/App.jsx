import "./App.css";
import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./pages/Home"))
const SobreNosotros = lazy(() => import("./pages/SobreNosotros"))
const Tareas = lazy(() => import("./pages/Tareas"))

function App() {

  return (
    <div>
      <Suspense fallback={<div>Cargando...</div>}>
      <h1>Menu de navegación</h1>
      <Menu/>
      <hr/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/tareas" element={<Tareas/>} />
        <Route path="/Sobre_Nosotros" element={<SobreNosotros/>}></Route>
      </Routes>
      </Suspense>
    </div>
  );
}

export default App;
