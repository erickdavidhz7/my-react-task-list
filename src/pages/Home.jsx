import { Heading } from '@chakra-ui/react'

export default function Home(){
    return(
        <div className="homePage">
            <Heading size="lg" fontWeight="700" paddingLeft="25px" noOfLines={2} maxWidth="550px">¡Bienvenido a esta página web de listado de tareas!</Heading>
        </div>
    )
}