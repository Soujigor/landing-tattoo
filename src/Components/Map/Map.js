import { AspectRatio, Box, Center } from "@chakra-ui/react";
import React from "react";

const Map = () => {
  return (
    <Box>
      <Center h="100px" color="black" fontSize="5xl"> Localização </Center>

      <AspectRatio ratio={16 / 9}>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.8958125921745!2d137.27022911523522!3d34.8085629804069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6004c66a94a4bed3%3A0xa9bd9f8e8f44f20a!2sLaguna%20Ten%20Bosch!5e0!3m2!1sen!2sbr!4v1647026554697!5m2!1sen!2sbr"
          width="600"
          height="450"
          loading="lazy"
        />
      </AspectRatio>
    </Box>
  );
};

export default Map;
