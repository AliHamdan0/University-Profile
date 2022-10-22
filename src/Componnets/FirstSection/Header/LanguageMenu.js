import {
  Menu,
  MenuButton,
  MenuList,
  IconButton,
  Flex,
  Heading,
  MenuOptionGroup,
  MenuItemOption,
  Text,
  Image,
} from "@chakra-ui/react";
import { AiOutlineGlobal } from "react-icons/ai";
import { useTranslation } from "react-i18next";
export const LanguageMenu = () => {
  const { i18n } = useTranslation();
  const handleLang = (value) => {
    i18n.changeLanguage(value);
  };
  return (
    <Flex alignItems="center">
      <Heading fontSize="md" color="headColor">
        {i18n.language === "ar" ? "العربية" : "English"}
      </Heading>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<AiOutlineGlobal size={30} color="inherit" />}
          variant="outline"
          border="none"
          me={["0px", "0px", "20px"]}
          ms="4px"
          color="secondaryColor"
          _hover={{ bg: "#9e9e9e" }}
        />
        <MenuList>
          <MenuOptionGroup
            defaultValue={i18n.language}
            type="radio"
            onChange={handleLang}
          >
            <MenuItemOption value="en">
              <Flex justifyContent="space-between" alignItems="center">
                <Text>English</Text>
                <Image
                  src="https://icon-library.com/images/united-kingdom-icon/united-kingdom-icon-23.jpg"
                  width="30px"
                  height="30px"
                  borderRadius="50%"
                />
              </Flex>
            </MenuItemOption>
            <MenuItemOption value="ar">
              <Flex justifyContent="space-between" alignItems="center">
                <Text>العربية</Text>
                <Image
                  src="https://icon-library.com/images/saudi-arabia-flag-icon/saudi-arabia-flag-icon-24.jpg"
                  width="30px"
                  height="30px"
                  borderRadius="50%"
                />
              </Flex>
            </MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </Flex>
  );
};
