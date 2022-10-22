import style from "../../Styles/home.module.css";
import { Grid, Box } from "@chakra-ui/react";
export const LandHome = ({ children }) => {
  return (
    <Box position="relative">
      <Grid
        templateRows="auto 1fr"
        templateColumns="repeat(1, 1fr)"
        className={style.landCont}
        pb={["20px", "10px", "0px"]}
      >
        {children}
      </Grid>
      <div className="overlay"></div>
    </Box>
  );
};
