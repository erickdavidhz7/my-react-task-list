import { Heading, Text, Highlight, List, ListItem, ListIcon, OrderedList, UnorderedList } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export default function SobreNosotros() {
  return (
    <div>
      <Heading paddingLeft="25px" as="h1" noOfLines={1}>
        Acerca de nosotros
      </Heading>
      <Text paddingLeft="50px"  className="parrafo-nosotros">
        <Highlight query={"Erick David Henríquez Sierra."} styles={{ px: "1", py: "1", rounded: "full", bg: "teal.100" }}>
          La página web ha sido realizada por una sola persona, esa seria el desarrollador full stack Erick David Henríquez Sierra. Esta aplicación de listado de tareas es capaz de permitir al usuario
          añadir multiples tareas con o sin descripción a su respectivo listado, el usuario las puede marcar las tareas como ya realizadas tambien puede editar las tareas y eliminarlas.
        </Highlight>
      </Text>
      <Heading paddingLeft="25px"  as="h2" noOfLines={1}>
        Tecnologías Utilizadas
      </Heading>
        <List paddingLeft="50px"  spacing={3}>
          <ListItem>
            <ListIcon as={StarIcon} color="yellow.200" />
            React
          </ListItem>
          <ListItem>
            <ListIcon as={StarIcon} color="yellow.200"  />
            JavaScript
          </ListItem>
          <ListItem>
            <ListIcon as={StarIcon} color="yellow.200"  />
            HTML
          </ListItem>
          {/* You can also use custom icons from react-icons */}
          <ListItem>
            <ListIcon as={StarIcon} color="yellow.200"  />
            CSS
          </ListItem>
        </List>
    </div>
  );
}
