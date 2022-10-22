import { Flex } from "@chakra-ui/react";
import { TitleSection } from "../../ReusableComponsnts";
import style from "../../../Styles/home.module.css";
import { useTranslation } from "react-i18next";
export const ParallaxSupport = () => {
  const { t } = useTranslation();
  return (
    <>
      <Flex
        flexDir="column"
        className={style.parallaxBack}
        backgroundImage="./imgs/support.jpg"
        alignItems="center"
      >
        <TitleSection
          txtcolor="mainFont"
          title={t("Dedicated_24")}
          subtitle={t("Our_Support")}
          max={["90%", "70%", "50%"]}
        />
      </Flex>
    </>
  );
};
