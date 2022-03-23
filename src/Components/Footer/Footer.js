import {
  Box,
  Container,
  Image,
  Flex,
  Link,
  HStack,
  Text,
  Stack,
  Button,
} from "@chakra-ui/react";
import React from "react";
import Logo from "../Images/logo.png";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Box>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Flex align="flex-start">
          <Link href="/">
            <HStack>
              <Image src={Logo} h="50px" />
              <Text>© 2022 Soujigor. Todos os direitos reservados. </Text>
            </HStack>
          </Link>
        </Flex>
        <Stack direction={"row"} spacing={6}>
          <Button>
            <FaInstagram />
          </Button>
          <Button>
            <FaTwitter />
          </Button>
          <Button>
            <FaYoutube />
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
