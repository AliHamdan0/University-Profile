import { Heading, Text, Button } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
export const InfoTxt = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Heading size="xl" noOfLines={3}>
        {t("Extremely_Responsive_and_Retina_Ready")}
      </Heading>
      <div className="SunderSeperator"></div>
      <Text size="md" lineHeight="1.8">
        {t("Due_to_its_responsiveness")}
      </Text>
      <Button
        bg="primaryColor"
        color="headColor"
        size="lg"
        my="45px"
        _hover={""}
      >
        {t("get_Template")}
      </Button>
    </div>
  );
};
