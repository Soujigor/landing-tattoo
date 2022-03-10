import React from "react";
import { chakra, Flex, SimpleGrid, Image, Box, Center } from "@chakra-ui/react";

import shop from "../Images/shop.jpg";

const About = () => {
  return (
    <Box bg="white">
      <Center h="100px" color="black" fontSize="5xl">
        Sobre o Estúdio
      </Center>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2} bg="white">
        <Flex bg="white">
          <Image
            src={shop}
            alt="tattoo shop"
            fit="cover"
            w="full"
            h={{ base: 64, md: "full" }}
            bg="white"
            loading="lazy"
          />
        </Flex>
        <Flex
          direction="column"
          alignItems="start"
          justifyContent="center"
          px={{ base: 4, md: 8, lg: 20 }}
          py={24}
          zIndex={3}
          bg="salmon"
        >
          <chakra.p
            pr={{ base: 0, lg: 16 }}
            mb={4}
            fontSize="lg"
            color="white"
            letterSpacing="wider"
          >
            The Straw Hat Pirates, also known as the Mugiwara Pirates, Straw Hat
            Crew or simply the Straw Hats, are an infamous and incredibly
            powerful rising pirate crew that originated from the East Blue, but
            have various members from different areas. They are the main focus
            and protagonists of the manga and anime One Piece, and are led by
            the main protagonist, Monkey D. Luffy. The "Straw Hats" are named
            after Luffy's signature hat that was given to him by Red-Haired
            Shanks, and are first referred to as the Straw Hat Pirates by Smoker
            in Arabasta. The crew sailed on the Going Merry, their first
            official Straw Hat ship, up until the Water 7 Arc. During the
            Post-Enies Lobby Arc, Franky and Iceburg built them a new ship which
            was named the Thousand Sunny by Iceburg even though the members
            fought over different names.
          </chakra.p>
        </Flex>
      </SimpleGrid>
    </Box>
  );
};

export default About;
