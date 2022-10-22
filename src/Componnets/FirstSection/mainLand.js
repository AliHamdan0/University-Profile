import { Container, Flex, Heading, Text, HStack } from "@chakra-ui/react";
import { ButtonComp, SencondButton } from "../ReusableComponsnts";
import { useTranslation } from "react-i18next";
export const MainLand = () => {
  const { t } = useTranslation();
  return (
    <Container
      maxWidth="85%"
      display="flex"
      alignItems="center"
      overflow="auto"
      zIndex={2}
    >
      <Flex
        flexDir="column"
        color="headColor"
        maxW={["100%", "100%", "45%"]}
        alignItems={["center", "center", "start"]}
      >
        <Heading
          mb="5"
          fontSize={["26px", "26px", "40px", "50px"]}
          fontWeight="700"
          lineHeight="1.5"
          textAlign={["center", "center", "start"]}
        >
          {t("Best_Education_Template")}
        </Heading>
        <Text
          as="h5"
          lineHeight="2"
          fontSize={["16px", "18px"]}
          fontWeight="400"
          letterSpacing="0.8px"
          textAlign={["center", "center", "start"]}
        >
          {t("homeTxt")}
        </Text>
        <HStack mt="6" spacing={["0px", "0px", "40px"]}>
          <ButtonComp>{t("Start_a_journey")}</ButtonComp>
          <SencondButton display={["none", "none", "inline-flex"]}>
            {t("Get_Tempalte_Now")}
          </SencondButton>
        </HStack>
      </Flex>
    </Container>
  );
};
