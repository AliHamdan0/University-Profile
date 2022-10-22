import "./App.css";
import { Home } from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Pages/Layout";
import { useTheme } from "./Theme/Theme";
import { ChakraProvider } from "@chakra-ui/react";
import { RtlProvider } from "./rtlProvider/rtl-provider";
import { ColorModeScript } from "@chakra-ui/react";
function App() {
  const [Theme] = useTheme();

  return (
    <ChakraProvider theme={Theme}>
      <RtlProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/layout" element={<Layout />} />
        </Routes>
        <ColorModeScript initialColorMode={Theme.config.initialColorMode} />
      </RtlProvider>
    </ChakraProvider>
  );
}

export default App;
