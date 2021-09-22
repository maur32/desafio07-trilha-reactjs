import {
  Flex,
  Grid,
  GridItem,
  UnorderedList,
  useBreakpointValue,
} from "@chakra-ui/react";
import {TravelType} from "./TravelType";

export function TravelTypes() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  if (isWideVersion) {
    return (
      <Flex justifyContent="space-around">
        <TravelType image="images/cocktail.svg">vida noturna</TravelType>
        <TravelType image="images/surf.svg">praia</TravelType>
        <TravelType image="images/building.svg">moderno</TravelType>
        <TravelType image="images/museum.svg">clássico</TravelType>
        <TravelType image="images/earth.svg">e mais...</TravelType>
      </Flex>
    );
  } else {
    return (
      <Grid templateColumns="1fr 1fr" rowGap="6">
        <TravelType image="images/cocktail.svg">vida noturna</TravelType>
        <TravelType image="images/surf.svg">praia</TravelType>
        <TravelType image="images/building.svg">moderno</TravelType>
        <TravelType image="images/museum.svg">clássico</TravelType>
        <GridItem colSpan={2}>
          <TravelType image="images/earth.svg">e mais...</TravelType>
        </GridItem>
      </Grid>
    );
  }
}
