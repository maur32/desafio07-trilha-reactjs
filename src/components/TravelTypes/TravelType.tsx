import {
  Img,
  Text,
  Stack,
  useBreakpointValue,
  UnorderedList,
  ListItem,
  ListIcon,
  List,
} from "@chakra-ui/react";

import {FaCircle} from "react-icons/fa";

interface TravelTypeProps {
  children: string;
  image: string;
}

export function TravelType({children, image}: TravelTypeProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Stack alignItems="center" spacing="6">
      {isWideVersion && <Img src={image} w="85px" h="85px" />}
      {isWideVersion && (
        <Text fontWeight="semibold" fontSize={["lg", "2xl"]}>
          {children}
        </Text>
      )}
      {!isWideVersion && (
        <List>
          <ListItem display="flex" alignItems="center">
            <ListIcon as={FaCircle} color="yellow.300" fontSize="8px" />
            <Text fontWeight="semibold" fontSize={["lg", "2xl"]}>
              {children}
            </Text>
          </ListItem>
        </List>
      )}
    </Stack>
  );
}
