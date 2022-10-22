import { Button, Flex, Heading } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
export const Contactus = () => {
  const { t } = useTranslation("translation");
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Heading as="h6" size={["md", "md", "lg"]}>
        {t("contactus")}
      </Heading>
      <Button bg="primaryColor" color="headColor">
        {t("Contact")}
      </Button>
    </Flex>
  );
};
