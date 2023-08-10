import { Button, Flex, useColorMode } from "@chakra-ui/react";

const Toggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <Flex >
        <Button size="xs"  onClick={() => toggleColorMode()}>
         Tema {colorMode}
        </Button>
      </Flex>
    </div>
  );
};

export default Toggle;