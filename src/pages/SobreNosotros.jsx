import { Heading, Text, Highlight, List, ListItem, ListIcon} from "@chakra-ui/react";
import { BiLogoReact, BiLogoJavascript, BiLogoHtml5, BiLogoCss3 } from "react-icons/bi";

export default function SobreNosotros() {
  return (
    <div className="sobreNosotrosPage">
      <Heading size="lg" fontWeight="700" paddingLeft="25px" noOfLines={1}>
        Acerca de nosotros
      </Heading>
      <Text paddingLeft="35px" className="parrafo-nosotros">
        <Highlight query={"Erick David Henríquez Sierra."} styles={{ px: "1", py: "1", rounded: "full", bg: "#b2bef5" }}>
          La página web ha sido realizada por una sola persona, esa seria el desarrollador full stack Erick David Henríquez Sierra. Esta aplicación de listado de tareas es capaz de permitir al usuario
          añadir multiples tareas con o sin descripción a su respectivo listado, el usuario las puede marcar las tareas como ya realizadas, tambien puede editar las tareas y eliminarlas.
        </Highlight>
      </Text>
      <Heading size="lg" fontWeight="700" paddingLeft="25px" noOfLines={1}>
        Tecnologías Utilizadas
      </Heading>
      <List display="flex" flexDirection="column" alignContent="center" paddingLeft="25px" fontSize="20px"  fontWeight="500" spacing={3}>
        <ListItem display="flex" flexDirection="row" alignItems="center">
          <ListIcon boxSize="45px" as={BiLogoReact} color="#61DBFB"/>
          React
        </ListItem>
        <ListItem display="flex" flexDirection="row" alignItems="center">
          <ListIcon  boxSize="45px" as={BiLogoJavascript} color="yellow.200" />
          JavaScript
        </ListItem>
        <ListItem display="flex" flexDirection="row" alignItems="center">
          <ListIcon  boxSize="45px" as={BiLogoHtml5} color="#e34c26" />
          HTML
        </ListItem>
        {/* You can also use custom icons from react-icons */}
        <ListItem display="flex" flexDirection="row" alignItems="center">
          <ListIcon boxSize="45px" as={BiLogoCss3} color="#264de4"  />
          CSS
        </ListItem>
      </List>
    </div>
  );
}
