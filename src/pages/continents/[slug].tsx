import {Stack, Img, Text, Flex, Box, Grid, Icon} from "@chakra-ui/react";
import {GetStaticProps} from "next";
import Head from "next/head";
import {Cities100} from "../../components/Cities100";
import {Description} from "../../components/Description";

interface Continent {
  id: number;
  name: string;
  caption: string;
  description: string;
  swiperImage: string;
  bannerImage: string;
  countries: {
    numberCountries: number;
    numberLanguage: number;
    numberCities100: number;
    mainCities: [
      {
        city: string;
        country: string;
        image: string;
        icon: string;
      }
    ];
  };
}

interface ContinentProps {
  continent: Continent;
}

export default function Continent({continent}: ContinentProps) {
  return (
    <Stack maxW={1440} spacing={["6", "20"]}>
      <Box position="relative">
        <Img
          src={continent.bannerImage}
          w={1440}
          h={[150, 500]}
          objectFit="cover"
          filter="brightness(0.6)"
          position="relative"
        />
        <Text
          position="absolute"
          bottom={["30%", "15%"]}
          left={["140px", "130px"]}
          color="gray.50"
          fontWeight="600"
          fontSize={["28", "5xl"]}
        >
          {continent.name}
        </Text>
      </Box>
      <Description continent={continent} />
      <Cities100 continent={continent} />
    </Stack>
  );
}

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<ContinentProps> = async ({
  params,
}) => {
  try {
    const {slug} = params;
    const res = await (
      await fetch(`http://localhost:3333/continents/${slug}`)
    ).json();

    const continent = res[0];

    if (!continent) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        continent: continent,
      },
    };
  } catch (error) {
    return {notFound: true};
  }
};
