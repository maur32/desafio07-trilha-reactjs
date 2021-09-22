import {extendTheme} from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    yellow: {
      "300": "#FFBA08",
    },
    gray: {
      "600": "#47585B",
      "300": "#999999",
      "200": "#DADADA",
      "50": "#F5F8FA",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "gray.50",
        color: "gray.600",
      },
    },
  },
});
