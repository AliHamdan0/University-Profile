import {
  AspectRatio,
  Container,
  Flex,
  Heading,
  Text,
  Box,
  Center,
  HStack,
  Icon,
  useColorMode,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { BiSearch } from "react-icons/bi";
import DarkModeToggle from "react-dark-mode-toggle";
import { MobileMenu } from "./MobileMenu";
import { LanguageMenu } from "./LanguageMenu";
import { Link } from "react-router-dom";
import { LayoutPopOver } from "../../ReusableComponsnts";

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { t, i18n } = useTranslation();
  return (
    <Box position="relative" zIndex={2}>
      <MobileMenu />
      <Container maxWidth="95%" pt="15px">
        <Flex
          width="100%"
          alignItems="center"
          justifyContent={["space-between", "space-between", "flex-end"]}
          mb={[3, 2, 1]}
        >
          <LanguageMenu />
          <Text
            me="6px"
            color="secondaryColor"
            fontSize="16px"
            fontWeight={500}
          >
            {colorMode == "light" ? "Light Mode" : "Dark Mode"}
          </Text>
          <DarkModeToggle
            onChange={() => {
              toggleColorMode();
              setTimeout(() => {
                window.location.reload();
              }, [800]);
            }}
            checked={colorMode === "dark"}
            size={70}
            speed={1.1}
            className={i18n.language === "ar" ? "modeW modeTogle" : "modeTogle"}
          />
        </Flex>
        <Flex justifyContent="space-between" alignItems="center">
          <Center width="fit-content" gap="2">
            <Box
              width="70px"
              height="70px"
              border="1px"
              borderColor="headColor"
              bg="#fff"
              borderRadius="50%"
              p="3"
            >
              <AspectRatio maxW="80px" ratio={1}>
                <img alt="logo" src="./imgs/logo.png" />
              </AspectRatio>
            </Box>
            <Flex flexDirection="column">
              <Heading
                as="h6"
                fontSize="24px"
                noOfLines={1}
                letterSpacing="-0.3px"
                color="headColor"
                fontWeight="500"
                mb="5px"
              >
                {t("John_Harrison")}
              </Heading>
              <Text
                fontSize="14px"
                noOfLines={1}
                lineHeight="1"
                color="headColor"
              >
                {t("University")}
              </Text>
            </Flex>
          </Center>
          <HStack spacing="48px" display={["none", "none", "inline-flex"]}>
            <Heading
              as="h6"
              fontSize="18px"
              noOfLines={1}
              color="headColor"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              <Link to="/">{t("Home")}</Link>
            </Heading>
            <Heading
              as="h6"
              fontSize="18px"
              noOfLines={1}
              color="headColor"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              {t("Themes")}
            </Heading>
            <LayoutPopOver>
              <Heading
                as="h6"
                fontSize="18px"
                noOfLines={1}
                color="headColor"
                cursor="pointer"
                _hover={{ textDecoration: "underline" }}
              >
                <Link to="/layout">{t("Layout")}</Link>
              </Heading>
            </LayoutPopOver>
            <Heading
              as="h6"
              fontSize="18px"
              noOfLines={1}
              color="headColor"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              {t("Pages")}
            </Heading>
            <Heading
              as="h6"
              fontSize="18px"
              noOfLines={1}
              color="headColor"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              {t("Testimonial")}
            </Heading>
            <Icon
              as={BiSearch}
              color="headColor"
              w="25px"
              height="25px"
              fontWeight="500"
              cursor="pointer"
              _hover={{ color: "primaryColor" }}
            />
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};
