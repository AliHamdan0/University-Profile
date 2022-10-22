import { Text, Flex, Image, SimpleGrid } from "@chakra-ui/react";
import { TitleSection } from "../../ReusableComponsnts";
import style from "../../../Styles/home.module.css";
import { useTranslation } from "react-i18next";
export const ParallaxVariations = () => {
  const { t } = useTranslation();
  return (
    <>
      <Flex
        className={style.parallaxBack}
        flexDir="column"
        justifyContent="center"
        alignItems="center"
      >
        <TitleSection
          title={t("Different_Header_and_Footer_Variations")}
          txtcolor="#fff"
          zIndex="2"
        />
        <SimpleGrid columns={[1, 2, 3]} spacing={20} zIndex="2">
          <Flex flexDir="column" alignItems="center">
            <Image
              src="./imgs/lay1.png"
              alt="layout"
              fallbackSrc="./imgs/fall.jpg"
              objectFit="cover"
            />
            <Text fontSize="xl" color="#fff" mt="4">
              {t("Minimal_Header")}
            </Text>
          </Flex>
          <Flex flexDir="column" alignItems="center">
            <Image
              src="./imgs/lay2.png"
              alt="layout"
              fallbackSrc="./imgs/fall.jpg"
              objectFit="cover"
            />
            <Text fontSize="xl" color="#fff" mt="4">
              {t("Corporate_Header")}
            </Text>
          </Flex>
          <Flex flexDir="column" alignItems="center">
            <Image
              src="./imgs/lay3.png"
              alt="layout"
              fallbackSrc="./imgs/fall.jpg"
              objectFit="cover"
            />
            <Text fontSize="xl" color="#fff" mt="4">
              {t("Corporate_Header_Light")}
            </Text>
          </Flex>
        </SimpleGrid>
        <div className="layout"></div>
      </Flex>
    </>
  );
};
