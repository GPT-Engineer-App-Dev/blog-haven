import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: (props) => ({
      body: {
        bg: mode("white", "gray.800")(props),
        color: mode("black", "white")(props),
      },
    }),
  },
});

const Main = () => {
  const [colorMode, setColorMode] = useState(localStorage.getItem("chakra-ui-color-mode") || "light");

  useEffect(() => {
    localStorage.setItem("chakra-ui-color-mode", colorMode);
  }, [colorMode]);

  return (
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App colorMode={colorMode} setColorMode={setColorMode} />
      </ChakraProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
