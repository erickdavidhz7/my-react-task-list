import { useContext, useRef, useState } from "react";
import { MiContexto } from "../context/crearContexto";
import { CloseIcon, CheckIcon } from "@chakra-ui/icons";
import { Input, Button, IconButton, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, useDisclosure } from "@chakra-ui/react";

export default function TaskEdit(props) {
  const { idTarea, nombreTarea, descripcion, setIsShown } = props;
  const [inputNombre, setInputNombre] = useState(nombreTarea);
  const [inputDescripcion, setInputDescripcion] = useState(descripcion);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const { editarTarea } = useContext(MiContexto);

  const handleGuardarCambiosClick = () => {
    editarTarea(idTarea, inputNombre, inputDescripcion);
    onClose();
    setIsShown((previous) => !previous);
  };

  const handleCancelarCambiosClick = () => {
    setIsShown((previous) => !previous);
  };

  return (
    <div className="task">
      <form id="tituloTarea">
        <label id="nombreTarea">
          <Input id="nuevoNombreTarea" defaultValue={nombreTarea} type="text" onChange={(e) => setInputNombre(e.target.value)}></Input>
        </label>
      </form>
      <div id="botonesTarea">
        <IconButton type="button" colorScheme="blue" marginTop="7px" marginLeft="15px" marginRight="15px" width="45px"  icon={<CheckIcon />} onClick={onOpen}></IconButton>
        <IconButton type="button" colorScheme="red" marginTop="7px" marginRight="15px" width="45px"  icon={<CloseIcon />} onClick={handleCancelarCambiosClick}></IconButton>

        <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Guardar Cambios
              </AlertDialogHeader>

              <AlertDialogBody>¿Estás seguro?</AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancelar
                </Button>
                <Button colorScheme="blue" onClick={handleGuardarCambiosClick} ml={3}>
                  Guardar
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </div>
      <Input id="nuevaDescripcionTarea" height="30px" defaultValue={descripcion} type="text" onChange={(e) => setInputDescripcion(e.target.value)}></Input>
    </div>
  );
}
