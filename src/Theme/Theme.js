import { extendTheme } from "@chakra-ui/react";
import { useSelector } from "react-redux";
const mode = localStorage.getItem("chakra-ui-color-mode");

export function useTheme() {
  const pri = useSelector((state) => state.themeSlice.theme.primaryColor);
  const family = useSelector((state) => state.themeSlice.theme.fontFamily);
  const size = useSelector((state) => state.themeSlice.theme.fontSize);
  const Theme = extendTheme({
    colors: {
      headColor: mode === "light" ? "#fff" : "#000000d4",
      primaryColor: pri,
      mainFont: mode === "light" ? "#2d2e2e" : "#525252e3",
      lightBackground: mode === "light" ? "#F5F7FA" : "#f5f7fad4",
      lightText: mode === "light" ? "#888888" : "#000000d4",
      cardColor: mode === "light" ? "#fff" : "#1A202C",
      txtIcon: mode === "light" ? "#ffcd00" : "#f4f4f4", //text before lang Icon
      secondaryColor: mode === "light" ? "#FEEF88" : "#0F1542",
      titleSection: mode === "light" ? "black" : "#fff",
    },
    fonts: {
      body: family,
      heading: family,
      mono: family,
    },
    fontSizes: {
      xs: 0.75 * size + "rem",
      sm: 0.875 * size + "rem",
      md: 1 * size + "rem",
      lg: 1.125 * size + "rem",
      xl: 1.25 * size + "rem",
      "2xl": 1.5 * size + "rem",
      "3xl": 1.875 * size + "rem",
      "4xl": 2.25 * size + "rem",
      "5xl": 3 * size + "rem",
    },
    space: {
      100: "90px", //spacing between each section
    },
    components: {
      Drawer: {
        sizes: {
          mini: {
            dialog: { width: "80% !important" },
          },
        },
      },
    },
    config: {
      initialColorMode: "light",
      useSystemColorMode: false,
    },
  });
  return [Theme];
}
