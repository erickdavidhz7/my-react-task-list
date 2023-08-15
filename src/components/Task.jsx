import { useState, useContext, useRef } from "react";
import { MiContexto } from "../context/crearContexto";
import TaskEdit from "./TaskEdit";
import Checkbox from "./Checkbox";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Button, IconButton, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, useDisclosure } from "@chakra-ui/react";

export default function Task(props) {
  const { idTarea, nombreTarea, estadoTarea, descripcion } = props;
  const { deleteTarea, checkTarea } = useContext(MiContexto);
  const [checkeado, setCheckeado] = useState(estadoTarea);
  const [isShown, setIsShown] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const handleChange = (event) => {
    setCheckeado(event.target.checked);
    checkTarea(idTarea);
  };

  const strikeThrough = (text) => {
    return text
      .split("")
      .map((char) => char + "\u0336")
      .join("");
  };

  const handleEliminarTareaClick = () => {
    deleteTarea(idTarea);
    onClose();
  };

  const handleEditarTareaClick = () => {
    setIsShown((current) => !current);
  };

  return (
    <>
      {isShown ? (
        <TaskEdit idTarea={idTarea} nombreTarea={nombreTarea} estadoTarea={estadoTarea} descripcion={descripcion} setIsShown={setIsShown} />
      ) : (
        <div className="task">
          {
            <form id="tituloTarea">
              <Checkbox onChange={handleChange} defaultChecked={checkeado} />
              <label id="nombreTarea">{checkeado ? strikeThrough(nombreTarea) : nombreTarea}</label>
            </form>
          }
          <div id="botonesTarea">
            <IconButton icon={<EditIcon />} type="button" variant="outline" colorScheme="blue"  marginRight="15px" width="45px" onClick={handleEditarTareaClick}></IconButton>
            <IconButton icon={<DeleteIcon />} type="button" variant="outline" colorScheme="red" marginRight="15px" width="45px" onClick={onOpen}></IconButton>
            <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
              <AlertDialogOverlay>
                <AlertDialogContent>
                  <AlertDialogHeader fontSize="lg" fontWeight="bold">
                    Eliminar Tarea
                  </AlertDialogHeader>

                  <AlertDialogBody>¿Estás seguro?</AlertDialogBody>

                  <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onClose}>
                      Cancelar
                    </Button>
                    <Button colorScheme="red" onClick={handleEliminarTareaClick} ml={3}>
                      Eliminar
                    </Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialogOverlay>
            </AlertDialog>
          </div>
          <p id="descripcionTarea">{descripcion}</p>
        </div>
      )}
    </>
  );
}
