import {Stack, Box, Divider, Text, Img, Flex} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import {Banner} from "../components/Banner";
import {TravelTypes} from "../components/TravelTypes";

import {Navigation, Pagination, Autoplay} from "swiper";

import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {GetStaticProps} from "next";

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

interface HomeProps {
  continents: Continent[];
}

export default function Home({continents}: HomeProps) {
  return (
    <Box h="100vh">
      <Head>
        <title>worldtrip</title>
      </Head>
      <Stack spacing={["9", "28"]} justifyContent="center">
        <Banner />
        <Stack spacing={["6", "20"]}>
          <TravelTypes />
          <Divider
            opacity="unset"
            borderColor="gray.600"
            border={["1px solid", "2px solid"]}
            w={["60px", "90px"]}
            alignSelf="center"
          />
          <Stack spacing={["5", "14"]} shouldWrapChildren alignItems="center">
            <Text alignSelf="center" fontSize={["xl", "4xl"]} align="center">
              Vamos nessa?
              <br />
              Então escolha seu continente
            </Text>
            <Flex w={["375px", "1240px"]} h={["250px", "450px"]} mb="40px">
              <Swiper
                navigation
                pagination={{clickable: true}}
                modules={[Navigation, Pagination, Autoplay]}
                autoplay={{delay: 3000, disableOnInteraction: false}}
              >
                {continents.map((continent) => (
                  <SwiperSlide key={continent.id}>
                    <Box position="relative" display="inline-block">
                      <Img
                        src={continent.swiperImage}
                        display="inline"
                        filter="brightness(0.5)"
                        objectFit="cover"
                      />
                      <Box
                        position="absolute"
                        top="0"
                        bottom="0"
                        right="0"
                        left="0"
                        margin="auto"
                        textAlign="center"
                        h={["30%", "50%"]}
                        w="100%"
                      >
                        <Link href={`/continents/${continent.name}`}>
                          <Text
                            fontSize={["2xl", "5xl"]}
                            fontWeight="700"
                            color="gray.50"
                            cursor="pointer"
                          >
                            {continent.name}
                          </Text>
                        </Link>
                        <Text
                          fontSize={["sm", "2xl"]}
                          fontWeight="700"
                          color="gray.50"
                        >
                          {continent.caption}
                        </Text>
                      </Box>
                    </Box>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Flex>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  try {
    const Continents = await (await fetch(`http://localhost:3333`)).json();
    if (!Continents) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        continents: Continents,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
