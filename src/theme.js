import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand:{
      100: "#3c8067", // DARK CYAN
      200: "#f2ebe3", // CREAM
      300: "#1c232b", // VERY DARK BLUE
      400: "#6c7289", // DARK GRAYISH BLUE
    }
  },
  fonts:{
    heading: `'Fraunces', sans-serif`,
    body: `'Montserrat', sans-serif`,
  }
})

export default theme;