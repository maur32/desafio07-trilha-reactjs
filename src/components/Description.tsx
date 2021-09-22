import {InfoOutlineIcon} from "@chakra-ui/icons";
import {
  Stack,
  Text,
  Box,
  Flex,
  Tooltip,
  useBreakpointValue,
} from "@chakra-ui/react";

export function Description({continent}) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Stack
      direction={["column", "row"]}
      justifyContent="center"
      spacing={["4", 70]}
    >
      <Box maxWidth={["343px", "600px"]} flexGrow={6} alignSelf="center">
        <Text fontSize={["sm", "2xl"]} align="justify">
          {continent.description}
        </Text>
      </Box>
      <Stack
        direction="row"
        w={["343px", "490px"]}
        alignItems="center"
        justifyContent="center"
        alignSelf="center"
        spacing={42}
      >
        <Flex
          color="yellow.300"
          fontSize={[24, "5xl"]}
          fontWeight="600"
          flexDirection="column"
        >
          {continent.countries.numberCountries}
          <Text color="gray.600" fontSize={["lg", "2xl"]} fontWeight="400">
            países
          </Text>
        </Flex>
        <Flex
          color="yellow.300"
          fontSize={[24, "5xl"]}
          fontWeight="600"
          display="flex"
          flexDirection="column"
        >
          {continent.countries.numberLanguage}
          <Text color="gray.600" fontSize={["lg", "2xl"]} fontWeight="400">
            línguas
          </Text>
        </Flex>
        <Flex
          color="yellow.300"
          fontSize={[24, "5xl"]}
          fontWeight="600"
          display="flex"
          flexDirection="column"
        >
          {continent.countries.numberCities100}
          <Stack direction="row">
            <Text
              Text
              color="gray.600"
              fontSize={["lg", "2xl"]}
              fontWeight="400"
            >
              cidades +100
            </Text>
            {isWideVersion && (
              <Tooltip label="N° de cidades entre as 100 mais visitadas">
                <InfoOutlineIcon
                  color="rgba(153,153,153,0.5)"
                  fontSize="md"
                  alignSelf="center"
                />
              </Tooltip>
            )}
          </Stack>
        </Flex>
      </Stack>
    </Stack>
  );
}
