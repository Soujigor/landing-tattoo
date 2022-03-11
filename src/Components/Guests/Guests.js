import React from "react";
import {
  chakra,
  Box,
  Image,
  Flex,
  Icon,
  useColorModeValue,
  SimpleGrid,
  Center
} from "@chakra-ui/react";

import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa"

import zoro from "../Images/zoro.jpg";

const Guests = () => {
  return (
    <Box>
      <Center h="100px" color="black" fontSize="5xl">
        Convidados 
      </Center>
    <Flex
      bg="white"
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <SimpleGrid columns={[1, 2]} row={[1,2]} gap={5}>
        <Box
          w="sm"
          mx="auto"
          bg={useColorModeValue("white", "gray.800")}
          shadow="lg"
          rounded="lg"
          overflow="hidden"
        >
          <Image
            w="full"
            h={56}
            fit="cover"
            objectPosition="center"
            src={zoro}
            alt="avatar"
          />

          <Box py={4} px={6}>
            <chakra.h1
              fontSize="xl"
              fontWeight="bold"
              color={useColorModeValue("gray.800", "white")}
            >
              Roronoa Zoro
            </chakra.h1>

            <chakra.p py={2} color={useColorModeValue("gray.700", "gray.400")}>
              As a master of Three Sword Style, a swordsmanship style which he
              created during his childhood training in Shimotsuki Village, Zoro
              is among the three most powerful combatants of the Straw Hats,
              alongside Luffy and Sanji
            </chakra.p>

            <Flex
              alignItems="center"
              mt={4}
              color={useColorModeValue("gray.700", "gray.200")}
            ></Flex>
            <Flex
              alignItems="center"
              mt={4}
              color={useColorModeValue("gray.700", "gray.200")}
            >
              <Icon as={FaInstagram} h={6} w={6} mr={2} />

              <chakra.h1 px={2} fontSize="sm">
                ZoroKingOfHell
              </chakra.h1>
            </Flex>
            <Flex
              alignItems="center"
              mt={4}
              color={useColorModeValue("gray.700", "gray.200")}
            >
              <Icon as={MdEmail} h={6} w={6} mr={2} />

              <chakra.h1 px={2} fontSize="sm">
                zoro@mugiwaras.com
              </chakra.h1>
            </Flex>
          </Box>
        </Box>

        <Box
          w="sm"
          mx="auto"
          bg={useColorModeValue("white", "gray.800")}
          shadow="lg"
          rounded="lg"
          overflow="hidden"
        >
          <Image
            w="full"
            h={56}
            fit="cover"
            objectPosition="center"
            src={zoro}
            alt="avatar"
          />

          <Box py={4} px={6}>
            <chakra.h1
              fontSize="xl"
              fontWeight="bold"
              color={useColorModeValue("gray.800", "white")}
            >
              Roronoa Zoro
            </chakra.h1>

            <chakra.p py={2} color={useColorModeValue("gray.700", "gray.400")}>
              As a master of Three Sword Style, a swordsmanship style which he
              created during his childhood training in Shimotsuki Village, Zoro
              is among the three most powerful combatants of the Straw Hats,
              alongside Luffy and Sanji
            </chakra.p>

            <Flex
              alignItems="center"
              mt={4}
              color={useColorModeValue("gray.700", "gray.200")}
            ></Flex>
            <Flex
              alignItems="center"
              mt={4}
              color={useColorModeValue("gray.700", "gray.200")}
            >
              <Icon as={FaInstagram} h={6} w={6} mr={2} />

              <chakra.h1 px={2} fontSize="sm">
                ZoroKingOfHell
              </chakra.h1>
            </Flex>
            <Flex
              alignItems="center"
              mt={4}
              color={useColorModeValue("gray.700", "gray.200")}
            >
              <Icon as={MdEmail} h={6} w={6} mr={2} />

              <chakra.h1 px={2} fontSize="sm">
                zoro@mugiwaras.com
              </chakra.h1>
            </Flex>
          </Box>
        </Box>

        <Box
          w="sm"
          mx="auto"
          bg={useColorModeValue("white", "gray.800")}
          shadow="lg"
          rounded="lg"
          overflow="hidden"
        >
          <Image
            w="full"
            h={56}
            fit="cover"
            objectPosition="center"
            src={zoro}
            alt="avatar"
          />

          <Box py={4} px={6}>
            <chakra.h1
              fontSize="xl"
              fontWeight="bold"
              color={useColorModeValue("gray.800", "white")}
            >
              Roronoa Zoro
            </chakra.h1>

            <chakra.p py={2} color={useColorModeValue("gray.700", "gray.400")}>
              As a master of Three Sword Style, a swordsmanship style which he
              created during his childhood training in Shimotsuki Village, Zoro
              is among the three most powerful combatants of the Straw Hats,
              alongside Luffy and Sanji
            </chakra.p>

            <Flex
              alignItems="center"
              mt={4}
              color={useColorModeValue("gray.700", "gray.200")}
            ></Flex>
            <Flex
              alignItems="center"
              mt={4}
              color={useColorModeValue("gray.700", "gray.200")}
            >
              <Icon as={FaInstagram} h={6} w={6} mr={2} />

              <chakra.h1 px={2} fontSize="sm">
                ZoroKingOfHell
              </chakra.h1>
            </Flex>
            <Flex
              alignItems="center"
              mt={4}
              color={useColorModeValue("gray.700", "gray.200")}
            >
              <Icon as={MdEmail} h={6} w={6} mr={2} />

              <chakra.h1 px={2} fontSize="sm">
                zoro@mugiwaras.com
              </chakra.h1>
            </Flex>
          </Box>
        </Box>

        <Box
          w="sm"
          mx="auto"
          bg={useColorModeValue("white", "gray.800")}
          shadow="lg"
          rounded="lg"
          overflow="hidden"
        >
          <Image
            w="full"
            h={56}
            fit="cover"
            objectPosition="center"
            src={zoro}
            alt="avatar"
          />

          <Box py={4} px={6}>
            <chakra.h1
              fontSize="xl"
              fontWeight="bold"
              color={useColorModeValue("gray.800", "white")}
            >
              Roronoa Zoro
            </chakra.h1>

            <chakra.p py={2} color={useColorModeValue("gray.700", "gray.400")}>
              As a master of Three Sword Style, a swordsmanship style which he
              created during his childhood training in Shimotsuki Village, Zoro
              is among the three most powerful combatants of the Straw Hats,
              alongside Luffy and Sanji
            </chakra.p>

            <Flex
              alignItems="center"
              mt={4}
              color={useColorModeValue("gray.700", "gray.200")}
            ></Flex>
            <Flex
              alignItems="center"
              mt={4}
              color={useColorModeValue("gray.700", "gray.200")}
            >
              <Icon as={FaInstagram} h={6} w={6} mr={2} />

              <chakra.h1 px={2} fontSize="sm">
                ZoroKingOfHell
              </chakra.h1>
            </Flex>
            <Flex
              alignItems="center"
              mt={4}
              color={useColorModeValue("gray.700", "gray.200")}
            >
              <Icon as={MdEmail} h={6} w={6} mr={2} />

              <chakra.h1 px={2} fontSize="sm">
                zoro@mugiwaras.com
              </chakra.h1>
            </Flex>
          </Box>
        </Box>

      </SimpleGrid>
    </Flex>
    </Box>
  );
};

export default Guests;
