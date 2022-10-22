import {
  Box,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  SimpleGrid,
} from "@chakra-ui/react";
import { TabItem, TitleSection, ButtonTemp } from "../../ReusableComponsnts";
import style from "../../../Styles/home.module.css";
import {
  all,
  HomeSliders,
  HomeImages,
  HomeParallax,
  Special,
  Video,
} from "./data";
import { useState } from "react";
import { MobileLayout } from "./MobileLayout";
import { useTranslation } from "react-i18next";
export const HomeLayout = ({ color }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const { t } = useTranslation();
  return (
    <Box>
      <TitleSection
        txtcolor={color === "dark" ? "black" : "titleSection"}
        title={t("Home_Layouts")}
        subtitle={t("HomeLayout")}
      />
      <MobileLayout />
      <Tabs
        align="center"
        isLazy
        variant="unstyled"
        index={tabIndex}
        onChange={(i) => setTabIndex(i)}
        display={["none", "none", "block"]}
      >
        <TabList width="fit-content" m="auto">
          <Tab
            fontSize="lg"
            className={tabIndex == 0 ? style.defaultTab : style.tabItemStyle}
            color={color === "dark" ? "" : "titleSection"}
          >
            {t("All")}
          </Tab>
          <Tab
            fontSize="lg"
            className={tabIndex == 1 ? style.defaultTab : style.tabItemStyle}
            color={color === "dark" ? "" : "titleSection"}
          >
            {t("Home_Slider")}
          </Tab>
          <Tab
            fontSize="lg"
            className={tabIndex == 2 ? style.defaultTab : style.tabItemStyle}
            color={color === "dark" ? "" : "titleSection"}
          >
            {t("Home_Image")}
          </Tab>
          <Tab
            fontSize="lg"
            className={tabIndex == 3 ? style.defaultTab : style.tabItemStyle}
            color={color === "dark" ? "" : "titleSection"}
          >
            {t("Home_Parallax")}
          </Tab>
          <Tab
            fontSize="lg"
            className={tabIndex == 4 ? style.defaultTab : style.tabItemStyle}
            color={color === "dark" ? "" : "titleSection"}
          >
            {t("Home_Special")}
          </Tab>
          <Tab
            fontSize="lg"
            className={tabIndex == 5 ? style.defaultTab : style.tabItemStyle}
            color={color === "dark" ? "" : "titleSection"}
          >
            {t("Home_Video")}
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <SimpleGrid columns={[1, 2, 4]} spacing={8}>
              {all?.map((item) => (
                <TabItem
                  key={item.id}
                  src={item.src}
                  text={t(item.text)}
                  animation="tabItemAnimate"
                />
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid columns={[1, 2, 4]} spacing={8}>
              {HomeSliders?.map((item) => (
                <TabItem
                  key={item.id}
                  src={item.src}
                  text={t(item.text)}
                  animation="tabHomeAnimate"
                />
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid columns={[1, 2, 4]} spacing={8}>
              {HomeImages?.map((item) => (
                <TabItem
                  key={item.id}
                  src={item.src}
                  text={t(item.text)}
                  animation="tabHomeAnimate"
                />
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid columns={[1, 2, 4]} spacing={8}>
              {HomeParallax?.map((item) => (
                <TabItem
                  key={item.id}
                  src={item.src}
                  text={t(item.text)}
                  animation="tabHomeAnimate"
                />
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid columns={[1, 2, 4]} spacing={8}>
              {Special?.map((item) => (
                <TabItem
                  key={item.id}
                  src={item.src}
                  text={t(item.text)}
                  animation="tabHomeAnimate"
                />
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid columns={[1, 2, 4]} spacing={8}>
              {Video?.map((item) => (
                <TabItem
                  key={item.id}
                  src={item.src}
                  text={t(item.text)}
                  animation="tabItemEndAnimate"
                />
              ))}
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <ButtonTemp
        text={t("get_Template")}
        className={tabIndex % 2 == 0 ? "showBtn" : "NshowBtn"} ///small trick to toggle the class when tan is changed
      />
    </Box>
  );
};
