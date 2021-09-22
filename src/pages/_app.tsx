import {ChakraProvider} from "@chakra-ui/react";
import {Header} from "../components/Header";
import {theme} from "../styles/theme";

import "../styles/styles.css";

function MyApp({Component, pageProps}) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
