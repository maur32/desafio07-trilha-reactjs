import {Stack, Img, Text, Flex, Box, Grid, Icon} from "@chakra-ui/react";

export function Cities100({continent}) {
  return (
    <Flex
      direction="row"
      maxW={[300, 1160]}
      wrap="wrap"
      alignItems="center"
      alignSelf={["center", "center"]}
      mb={["35px !important"]}
    >
      <Stack spacing={["5", "10"]} flexWrap="wrap">
        <Text
          color="gray.600"
          fontWeight="500"
          fontSize={["24px", "4xl"]}
          position={["relative", "unset"]}
          right={["50px", ""]}
        >
          Cidades +100
        </Text>
        <Grid templateColumns={["1fr", "repeat(4,1fr)"]} gap={45}>
          {continent.countries.mainCities.map((city) => (
            <Box maxW="64" borderRadius="4px" overflow="hidden" key={city.city}>
              <Img src={city.image} objectFit="cover" h="173" w="64" />
              <Flex
                bgColor="white"
                borderRadius=" 0 0 4px 4px"
                wrap="wrap"
                h={106}
                border="1px solid rgba(255,186,8,0.5)"
              >
                <Stack flexGrow={8} ml="6" mt={18}>
                  <Text fontSize="xl" fontWeight="600">
                    {city.city}
                  </Text>
                  <Text
                    fontSize="md"
                    fontWeight="500"
                    fontFamily="Barlow"
                    color="gray.300"
                  >
                    {city.country}
                  </Text>
                </Stack>
                <Box
                  alignSelf="center"
                  flexGrow={2}
                  boxSize={30}
                  bgRepeat="no-repeat"
                  bgImg={city.icon}
                />
              </Flex>
            </Box>
          ))}
        </Grid>
      </Stack>
    </Flex>
  );
}
