import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  InputGroup,
  InputRightElement,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Box,
  Icon,
  Input,
  IconButton,
  Center,
  Image,
  Flex,
  Text,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useRef } from "react";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useTranslation } from "react-i18next";
export const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation();
  const btnRef = useRef();
  return (
    <Box display={["inline", "inline", "none"]} bg="#fff" p="20px">
      <IconButton ref={btnRef} onClick={onOpen}>
        <Icon
          as={isOpen ? AiOutlineClose : BiMenu}
          w={10}
          h={10}
          color="primaryColor"
          cursor="pointer"
          className={isOpen ? "rotR" : "RotL"}
        />
      </IconButton>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        blockScrollOnMount={false}
        size="mini"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <Center width="100%">
              <Image
                src="./imgs/bigLogo.png"
                width="138px"
                height="138px"
                objectFit="cover"
              />
            </Center>
            <Flex flexDir="column" py={3}>
              <Text
                color="primaryColor"
                fontSize="23px"
                fontWeight="bold"
                mb="16px"
              >
                {t("Home")}
              </Text>
              <Text
                color="primaryColor"
                fontSize="23px"
                fontWeight="bold"
                mb="16px"
              >
                {t("Themes")}
              </Text>
              <Text
                color="primaryColor"
                fontSize="23px"
                fontWeight="bold"
                mb="16px"
              >
                {t("Layout")}
              </Text>
              <Text
                color="primaryColor"
                fontSize="23px"
                fontWeight="bold"
                mb="16px"
              >
                {t("Pages")}
              </Text>
              <Text
                color="primaryColor"
                fontSize="20px"
                fontWeight="bold"
                mb="16px"
              >
                {t("Testimonial")}
              </Text>
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            <InputGroup>
              <Input placeholder={t("Type_here")} size="lg" variant="outline" />
              <InputRightElement
                children={<Search2Icon color="primaryColor" />}
              />
            </InputGroup>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
