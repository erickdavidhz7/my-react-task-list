import { useContext, useState } from "react";
import { MiContexto } from "../context/crearContexto";
import { AddIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

export default function TaskInput() {
  const [inputTarea, setInputTarea] = useState("");
  const [inputDescripcion, setInputDescripcion] = useState("");
  const { addTarea } = useContext(MiContexto);

  const handleSubmit = (event) => {
    event.preventDefault();

    setInputTarea("");
    setInputDescripcion("");
  };

  const handleChangeTarea = (event) => {
    setInputTarea(event.target.value);
  };

  const handleChangeDescripcion = (event) => {
    setInputDescripcion(event.target.value);
  };

  const handleNuevaTareaClick = () => {
    if (inputTarea.length > 3) {
      addTarea(inputTarea, inputDescripcion);
    } else {
      alert("La tarea debe tener más de 3 caracteres!");
    }
  };

  return (
    <div className="inputBar">
      <form id="formularioTarea" onSubmit={handleSubmit}>
        <input id="txt1" type="text" name="txt1" placeholder="Ingrese nueva tarea" onChange={handleChangeTarea} value={inputTarea} />
        <input id="txt2" type="text" name="txt2" placeholder="Ingrese una descripción" onChange={handleChangeDescripcion} value={inputDescripcion} />
        <IconButton type="submit" id="boton" icon={<AddIcon/>} onClick={handleNuevaTareaClick} />
      </form>
    </div>
  );
}
