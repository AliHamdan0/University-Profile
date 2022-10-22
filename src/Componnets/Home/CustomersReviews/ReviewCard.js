import { Flex, Heading, Text, Avatar, Box } from "@chakra-ui/react";
import { IoMdQuote } from "react-icons/io";
import Style from "../../../Styles/home.module.css";
import { useTranslation } from "react-i18next";
export const ReviewCard = () => {
  const { t } = useTranslation();
  return (
    <Box
      boxShadow="0px 0px 5px #8080808f"
      padding="16px"
      bg="cardColor"
      borderRadius="5px"
      position="realtive"
    >
      <IoMdQuote size={50} color="#80808033" className={Style.Quote} />
      <Heading size="md" lineHeight="1.6" my="10px" noOfLines={7}>
        {t("review")}
      </Heading>
      <Flex alignItems="center" gap="5px" my="25px">
        <Avatar
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
          size="lg"
        />
        <Flex flexDirection="column">
          <Heading size="sm">Steven Alvarez</Heading>
          <Text size="xm">{t("Regular_Client")}</Text>
        </Flex>
      </Flex>
    </Box>
  );
};
