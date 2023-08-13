import { useContext, useRef } from "react";
import { MiContexto } from "../context/crearContexto";
import { Button, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, useDisclosure } from "@chakra-ui/react";

export default function FooterTask() {
  const { tareasList, deleteAllTareas } = useContext(MiContexto);
  let numeroTareasPendientes = tareasList.filter((tarea) => !tarea.estado).length;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const eliminarTodasTareas = () => {
    deleteAllTareas();
    onClose();
  };
  return (
    <div className="Footer">
      <p className="tareasPendientes">Tienes {numeroTareasPendientes} tareas pendientes</p>
      <Button colorScheme="red" type="button" marginRight="75px" fontWeight="600" width="130px" height="50px" onClick={onOpen}>
        Limpiar Todo
      </Button>
      <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Eliminar Todas las Tareas
            </AlertDialogHeader>

            <AlertDialogBody>¿Estás seguro?</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancelar
              </Button>
              <Button colorScheme="red" onClick={eliminarTodasTareas} ml={3}>
                Eliminar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </div>
  );
}
