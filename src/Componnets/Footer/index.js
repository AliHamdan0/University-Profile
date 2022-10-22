import { Text, Flex, Center, Image, Heading, Box } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
export const Footer = () => {
  const { t } = useTranslation();
  return (
    <Flex
      flexDir={["column", "column", "row"]}
      justifyContent="space-between"
      alignItems="center"
      py="40px"
    >
      <Center width="fit-content" gap="5px">
        <Image
          src="./imgs/logo.png"
          width="70px"
          height="70px"
          objectFit="cover"
          bg="#fff"
          borderRadius="50%"
        />

        <Flex flexDirection="column" alignItems="flex-start" gap="8px">
          <Heading
            as="h6"
            fontSize="24px"
            noOfLines={1}
            letterSpacing="-0.3px"
            fontWeight="500"
          >
            {t("John_Harrison")}
          </Heading>
          <Text fontSize="14px" noOfLines={1} lineHeight="1">
            {t("University")}
          </Text>
        </Flex>
      </Center>
      <Text size="sm" textAlign="center" my={["20px", "20px", "0px"]}>
        © {t("copyRight")}
      </Text>
    </Flex>
  );
};
