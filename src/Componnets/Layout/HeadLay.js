import { Box } from "@chakra-ui/react";
import { Header } from "../FirstSection/Header";
import Style from "../../Styles/layout.module.css";
export const HeadLay = () => {
  return (
    <Box position="relative" className={Style.headLayImg}>
      <div className="overlay"></div>
      <Header />
    </Box>
  );
};
