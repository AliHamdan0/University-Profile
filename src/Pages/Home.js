import { Header } from "../Componnets/FirstSection/Header";
import { LandHome } from "../Componnets/FirstSection/land";
import { MainLand } from "../Componnets/FirstSection/mainLand";
import { Statistics } from "../Componnets/Home/Statistics";
import { Impressive } from "../Componnets/Home/Impressive";
import { HomeLayout } from "../Componnets/Home/HomeLayout";
import { Features } from "../Componnets/Home/Features";
import { ParallaxVariations } from "../Componnets/Home/ParallaxVariation";
import { Info } from "../Componnets/Home/Info";
import { CustomerReviews } from "../Componnets/Home/CustomersReviews";
import { ParallaxSupport } from "../Componnets/Home/ParallaxSupport";
import { Footer } from "../Componnets/Footer";
import { Container, Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Fragment } from "react";
import { Contactus } from "../Componnets/Home/contactus";
export const Home = () => {
  const sections = useSelector((state) => state.layoutSlice.layout);
  return (
    <div>
      <LandHome>
        <Header />
        <MainLand />
      </LandHome>
      {sections?.map((item, index) => {
        return (
          <Fragment key={item.id}>
            <Box bg={index % 2 === 0 ? "lightBackground" : ""}>
              <Container
                maxWidth="85%"
                py={
                  item.content === "parallax_variation" ||
                  item.content === "parallax_support"
                    ? "0px"
                    : 100
                }
              >
                {item.content === "statistics" ? (
                  <Statistics />
                ) : item.content === "impressive_topics" ? (
                  <Impressive color={index % 2 === 0 ? "dark" : ""} />
                ) : item.content === "main_design" ? (
                  <HomeLayout color={index % 2 === 0 ? "dark" : ""} />
                ) : item.content === "features" ? (
                  <Features color={index % 2 === 0 ? "dark" : ""} />
                ) : item.content === "clients" ? (
                  <CustomerReviews />
                ) : item.content === "info" ? (
                  <Info />
                ) : item.content === "contact" ? (
                  <Contactus />
                ) : null}
              </Container>

              {item.content === "parallax_variation" ? (
                <ParallaxVariations />
              ) : item.content === "parallax_support" ? (
                <ParallaxSupport />
              ) : null}
            </Box>

            {/* </Box>
            <Container maxWidth="85%" py={100}>
              <Impressive />
            </Container>
            <Box bg="lightBackground">
              <Container maxWidth="85%" py={100}>
                <HomeLayout />
              </Container>
            </Box>
            <Container maxWidth="85%" py={100}>
              <Features />
            </Container>
            <ParallaxVariations />
            <Container maxWidth="85%" py={100}>
              <Info />
            </Container>
            <Box bg="lightBackground">
              <Container maxWidth="85%" py={100}>
                <CustomerReviews />
              </Container>
            </Box>
            <ParallaxSupport /> */}
          </Fragment>
        );
      })}

      <Container maxWidth="85%">
        <Footer />
      </Container>
    </div>
  );
};
