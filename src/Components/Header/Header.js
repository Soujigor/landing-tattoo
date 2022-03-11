import React from "react";
import {
  chakra,
  HStack,
  Link,
  Flex,
  IconButton,
  useColorModeValue,
  useDisclosure,
  CloseButton,
  VStack,
  Button,
  Image,
} from "@chakra-ui/react";
import { useViewportScroll } from "framer-motion";
import Logo from "../Images/logo.png";

import { AiOutlineMenu } from "react-icons/ai";

export default function Header() {
  const bg = useColorModeValue("white", "gray.800");
  const ref = React.useRef();
  const [y, setY] = React.useState(0);
  const { height = 0 } = ref.current ? ref.current.getBoundingClientRect() : {};

  const { scrollY } = useViewportScroll();
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);

  const mobileNav = useDisclosure();

  const MobileNavContent = (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? "flex" : "none"}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg={bg}
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />
      <Button w="full" variant="ghost">
        Sobre o Estúdio
      </Button>
      <Button w="full" variant="ghost">
        Residentes
      </Button>
      <Button w="full" variant="ghost">
        Convidados
      </Button>
      <Button w="full" variant="ghost">
        Localização
      </Button>
      <Button w="full" variant="ghost">
        Contato
      </Button>
    </VStack>
  );
  return (
    <React.Fragment>
      <chakra.header
        ref={ref}
        shadow={y > height ? "sm" : undefined}
        transition="box-shadow 0.2s"
        bg={bg}
        w="full"
        overflowY="hidden"
      >
        <chakra.div h="4.5rem" mx="auto" maxW="1200px">
          <Flex
            w="full"
            h="full"
            px="6"
            py="5"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex align="flex-start">
              <Link href="/">
                <HStack>
                  <Image src={Logo} h="50px" />
                </HStack>
              </Link>
            </Flex>
            <Flex>
              <HStack spacing="5" display={{ base: "none", md: "flex" }}>
                <Button w="full" variant="ghost">
                  Sobre o Estúdio
                </Button>

                <Button w="full" variant="ghost">
                  Residentes
                </Button>
                <Button w="full" variant="ghost">
                  Convidados
                </Button>
                <Button w="full" variant="ghost">
                  Localização
                </Button>
              </HStack>
            </Flex>
            <Flex justify="flex-end" align="center" color="black">
              <HStack spacing="5" display={{ base: "none", md: "flex" }}>
                <Button w="full" variant="ghost">
                  Contato
                </Button>
              </HStack>

              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("gray.800", "inherit")}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
            </Flex>
          </Flex>
          {MobileNavContent}
        </chakra.div>
      </chakra.header>
    </React.Fragment>
  );
}
