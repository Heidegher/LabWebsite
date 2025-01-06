import { createRoot } from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "./App.jsx";

//global theme for chakra
const theme = extendTheme({
  fonts: {
    heading: "'Cormorant Garamond', serif",
    body: "'Cormorant Garamond', serif",
  },
  styles: {
    global: {
      "html, body": {
        margin: 0,
        padding: 0,
        height: "100%",
        boxSizing: "border-box",
        scrollBehavior: "smooth",
        fontSize: "1.18rem",
      },
      "#root": {
        height: "100%",
      },
    },
  },
});

createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
