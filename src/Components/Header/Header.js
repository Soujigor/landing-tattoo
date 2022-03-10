import React from "react";
import { Image, Flex, Button, HStack, Stack } from "@chakra-ui/react";

import logo from "../Images/logo.png";

const Header = () => {
  return (
    <Flex
      w="100%"
      px="6"
      py="5"
      align="center"
      justify="space-between"
      bg="gray.200"
    >
      <Image src={logo} h="50px" />

      <Stack direction="row" spacing="5" align="center">
        <Button bg="transparent" color="black">
          Sobre o Estúdio
        </Button>
        <Button bg="transparent" color="black">
          Serviços
        </Button>
        <Button bg="transparent" color="black">
          Residentes
        </Button>
        <Button bg="transparent" color="black">
          Convidados
        </Button>
        <Button bg="transparent" color="black">
          Localização
        </Button>
      </Stack>

      <HStack>
        <Button color="black">Contato</Button>
      </HStack>
    </Flex>
  );
};

export default Header;
