import React from "react";
import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import tattoo from "../Images/luffy.jpg";

export default function Crew() {
  return (
    <Flex
      w="full"
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={50}
      alignItems="center"
      justifyContent="center"
    >
      <SimpleGrid
        columns={[1, 2, 3]}
        gap="24px"
        mx="auto"
        textAlign={["left", "center"]}
      >
          
        <Box
          bg={useColorModeValue("white", "gray.800")}
          px={4}
          py={24}
          shadow="base"
          rounded="md"
          backgroundImage={tattoo}
          backgroundRepeat="no-repeat"
          bgSize="cover"
        >
          <chakra.p
            mb={1}
            fontSize="3xl"
            fontWeight="bold"
            letterSpacing="wide"
            textTransform="uppercase"
            color="red"
            marginBottom="10"
          >
            Monkey D. Luffy
          </chakra.p>
          <Text
            mb={2}
            fontSize="lg"
            fontWeight={["bold", "extrabold"]}
            color="red"
            lineHeight="tight"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel
            magna sit amet mauris lacinia ultricies. Donec molestie ante ut
            sapien laoreet pretium.
          </Text>
        </Box>

        <Box
          bg={useColorModeValue("white", "gray.800")}
          px={4}
          py={24}
          shadow="base"
          rounded="md"
          backgroundImage={tattoo}
          backgroundRepeat="no-repeat"
          bgSize="cover"
        >
          <chakra.p
            mb={1}
            fontSize="3xl"
            fontWeight="bold"
            letterSpacing="wide"
            textTransform="uppercase"
            color="red"
            marginBottom="10"
          >
            Monkey D. Luffy
          </chakra.p>
          <Text
            mb={2}
            fontSize="lg"
            fontWeight={["bold", "extrabold"]}
            color="red"
            lineHeight="tight"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel
            magna sit amet mauris lacinia ultricies. Donec molestie ante ut
            sapien laoreet pretium.
          </Text>
        </Box>
        <Box
          bg={useColorModeValue("white", "gray.800")}
          px={4}
          py={24}
          shadow="base"
          rounded="md"
          backgroundImage={tattoo}
          backgroundRepeat="no-repeat"
          bgSize="cover"
        >
          <chakra.p
            mb={1}
            fontSize="3xl"
            fontWeight="bold"
            letterSpacing="wide"
            textTransform="uppercase"
            color="red"
            marginBottom="10"
          >
            Monkey D. Luffy
          </chakra.p>
          <Text
            mb={2}
            fontSize="lg"
            fontWeight={["bold", "extrabold"]}
            color="red"
            lineHeight="tight"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel
            magna sit amet mauris lacinia ultricies. Donec molestie ante ut
            sapien laoreet pretium.
          </Text>
        </Box>
        <Box
          bg={useColorModeValue("white", "gray.800")}
          px={4}
          py={24}
          shadow="base"
          rounded="md"
          backgroundImage={tattoo}
          backgroundRepeat="no-repeat"
          bgSize="cover"
        >
          <chakra.p
            mb={1}
            fontSize="3xl"
            fontWeight="bold"
            letterSpacing="wide"
            textTransform="uppercase"
            color="red"
            marginBottom="10"
          >
            Monkey D. Luffy
          </chakra.p>
          <Text
            mb={2}
            fontSize="lg"
            fontWeight={["bold", "extrabold"]}
            color="red"
            lineHeight="tight"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel
            magna sit amet mauris lacinia ultricies. Donec molestie ante ut
            sapien laoreet pretium.
          </Text>
        </Box>
        <Box
          bg={useColorModeValue("white", "gray.800")}
          px={4}
          py={24}
          shadow="base"
          rounded="md"
          backgroundImage={tattoo}
          backgroundRepeat="no-repeat"
          bgSize="cover"
        >
          <chakra.p
            mb={1}
            fontSize="3xl"
            fontWeight="bold"
            letterSpacing="wide"
            textTransform="uppercase"
            color="red"
            marginBottom="10"
          >
            Monkey D. Luffy
          </chakra.p>
          <Text
            mb={2}
            fontSize="lg"
            fontWeight={["bold", "extrabold"]}
            color="red"
            lineHeight="tight"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel
            magna sit amet mauris lacinia ultricies. Donec molestie ante ut
            sapien laoreet pretium.
          </Text>
        </Box>
        <Box
          bg={useColorModeValue("white", "gray.800")}
          px={4}
          py={24}
          shadow="base"
          rounded="md"
          backgroundImage={tattoo}
          backgroundRepeat="no-repeat"
          bgSize="cover"
        >
          <chakra.p
            mb={1}
            fontSize="3xl"
            fontWeight="bold"
            letterSpacing="wide"
            textTransform="uppercase"
            color="red"
            marginBottom="10"
          >
            Monkey D. Luffy
          </chakra.p>
          <Text
            mb={2}
            fontSize="lg"
            fontWeight={["bold", "extrabold"]}
            color="red"
            lineHeight="tight"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel
            magna sit amet mauris lacinia ultricies. Donec molestie ante ut
            sapien laoreet pretium.
          </Text>
        </Box>
      </SimpleGrid>
    </Flex>
  );
}
