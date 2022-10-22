import { Flex, SimpleGrid } from "@chakra-ui/react";
import { ThemeItem, TitleSection } from "../../ReusableComponsnts";
import { useTranslation } from "react-i18next";
export const Impressive = ({ color }) => {
  const { t } = useTranslation();
  return (
    <Flex flexDir="column">
      <TitleSection
        title={t("Three_Impressive_Themes")}
        subtitle=""
        txtcolor={color === "dark" ? "black" : "titleSection"}
      />
      <SimpleGrid columns={[1, 2, 3]} spacing={5}>
        <ThemeItem src="./imgs/th1.jpg" text={t("Home_University")} />
        <ThemeItem src="./imgs/th2.jpg" text={t("Home_School")} />
        <ThemeItem src="./imgs/th3.jpg" text={t("Home_PreSchool")} />
      </SimpleGrid>
    </Flex>
  );
};
