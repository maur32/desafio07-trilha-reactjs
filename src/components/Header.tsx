import {ChevronLeftIcon} from "@chakra-ui/icons";
import {Flex, Img} from "@chakra-ui/react";
import {useRouter} from "next/router";
import Link from "next/link";

export function Header() {
  const router = useRouter();

  return (
    <Flex as="header" maxW={1440} h={[50, 100]} align="center" justify="center">
      {router.pathname === "/continents/[slug]" && (
        <Link href={"/"}>
          <ChevronLeftIcon
            position="absolute"
            right={["343px", "1268px"]}
            w={4}
            h={8}
            cursor="pointer"
          />
        </Link>
      )}
      <Img src="/images/logo.svg" w={["20", "44"]} h="10" />
    </Flex>
  );
}
