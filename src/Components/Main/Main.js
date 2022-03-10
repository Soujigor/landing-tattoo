import { Center, Grid, GridItem, Image } from "@chakra-ui/react";
import React from "react";
import tattoo from "../Images/tattoobg.jpg";
import piercing from "../Images/piercing.jpg"
import desenho from "../Images/desenho.jpg"

const Main = () => {
  return (
    <Grid
      h="700px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(3, 1fr)"
      gap={1}
    >
      <GridItem rowSpan={1} colSpan={1} bg="green" align="center">
        <Image src={tattoo} />
      </GridItem>
      <GridItem rowSpan={1} colSpan={1} bg="green" centerContent>
        <Center > asasasasas </Center>
      </GridItem>
      <GridItem rowSpan={1} colSpan={1} bg="green" align="center">
      <Image src={piercing} />
      </GridItem>
      <GridItem rowSpan={2} colSpan={1} bg="tomato" align="center">
        oi
      </GridItem>
      <GridItem rowSpan={2} colSpan={1} bg="tomato" align="center">
      <Image src={desenho} />
      </GridItem>
      <GridItem rowSpan={2} colSpan={1} bg="tomato" align="center">
        oi
      </GridItem>
    </Grid>
  );
};

export default Main;
