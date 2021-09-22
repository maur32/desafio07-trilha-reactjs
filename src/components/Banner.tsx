import {
  Box,
  Flex,
  Image,
  Text,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex
      w="100%"
      maxW={1440}
      h={[163, 335]}
      bgImg="/images/background.svg"
      bgSize="cover"
    >
      <Stack
        direction={["column", "row"]}
        spacing="48"
        display="flex"
        align="center"
      >
        <Stack
          spacing={["2", "5"]}
          h="100%"
          justifyContent="center"
          ml={["4", "36"]}
        >
          <Text fontSize={["xl", "4xl"]} fontWeight="medium" color="gray.50">
            5 Continentes, <br />
            infinitas possibilidades.
          </Text>
          <Text color="gray.200" fontWeight="regular" fontSize={["sm", "xl"]}>
            Chegou a hora de tirar do papel a viagem que você{" "}
            {isWideVersion && <br />}
            sempre sonhou.
          </Text>
        </Stack>
        {isWideVersion && (
          <Image src="/images/airplane.svg" position="relative" top="76px" />
        )}
      </Stack>
    </Flex>
  );
}
