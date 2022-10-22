import { TitleSection, FeatreItem } from "../../ReusableComponsnts";
import { Box, Icon, SimpleGrid } from "@chakra-ui/react";
import { featuresData } from "./data";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
export const Features = ({ color }) => {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({
      startEvent: "scroll",
      dataAosOnce: true,
      duration: 3000,
    });
  }, []);
  return (
    <Box>
      <TitleSection
        title={t("A_Variety_of_Awesome_Features")}
        subtitle={t("featuresText")}
        txtcolor={color === "dark" ? "black" : "titleSection"}
      />
      <SimpleGrid columns={[1, 2, 4]} spacing={8} mt="40px">
        {featuresData?.map((item) => (
          <div data-aos="fade-up" key={item.id}>
            <FeatreItem
              text={t(item?.text)}
              color={color === "dark" ? "black" : "titleSection"}
            >
              <Icon
                as={item?.icon}
                color="primaryColor"
                w="60px"
                height="60px"
                fontWeight="500"
              />
            </FeatreItem>
          </div>
        ))}
      </SimpleGrid>
    </Box>
  );
};
