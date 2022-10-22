import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Text,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import Style from "../../Styles/reusable.module.css";
import CountUp from "react-countup";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
export const ButtonComp = (props) => {
  return (
    <Button
      bg="primaryColor"
      color="headColor"
      lineHeight="0"
      fontSize="18px"
      _hover={{ color: "primaryColor", bg: "headColor" }}
      className={Style.primaryButton}
      {...props}
    >
      {props.children}
    </Button>
  );
};

export const SencondButton = (props) => {
  return (
    <Button
      bg="transparent"
      color="headColor"
      border="1px solid"
      borderColor="headColor"
      lineHeight="0"
      fontSize="18px"
      _hover={{ borderColor: "transparent", bg: "primaryColor" }}
      className={Style.primaryButton}
      {...props}
    >
      {props.children}
    </Button>
  );
};

export const StatisticItem = (props) => {
  const [visible, setVisible] = useState(false);
  const [scroll, setScroll] = useState(true);
  const [height, setHeight] = useState(null);
  const startRef = useRef();

  const handleScroll = () => {
    if (height < window.outerHeight / 4)
      //start the event when scrolling after the quarter of the viewport
      setVisible(true);
    startRef?.current?.click();
  };
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Flex
      alignItems="center"
      flexDirection="column"
      ref={(r) => setHeight(r?.current?.getBoundingClientRect().top)}
    >
      <Center
        border="1px solid grey"
        borderRadius="50%"
        width="120px"
        height="120px"
      >
        {props.children}
      </Center>
      {visible ? (
        <CountUp
          end={props.num > 300 ? 300 : props.num}
          suffix={props.num > 300 ? "+" : ""}
          onStart={() => setScroll(false)}
        >
          {({ countUpRef, start }) => (
            <Box>
              <Text
                fontSize="30px"
                fontWeight="700"
                ref={countUpRef}
                mt="10px"
                color="primaryColor"
              />
              <Button
                onClick={() => start()}
                display="none"
                ref={scroll === true ? startRef : null}
              >
                Start
              </Button>
            </Box>
          )}
        </CountUp>
      ) : (
        ""
      )}
      <Heading size="sm" color="mainFont" textTransform="uppercase" mt="10px">
        {props.text}
      </Heading>
    </Flex>
  );
};

export const ThemeItem = (props) => {
  return (
    <Box
      boxShadow="0px 0px 10px #80808047"
      overflow="hidden"
      position="relative"
      className="ThemeCont"
    >
      <Image
        width="100%"
        height="100%"
        objectFit="cover"
        src={props.src}
        fallbackSrc="./imgs/fall.jpg"
        className="imgTheme"
      />
      <Box className="imgTHLayout"></Box>
      <Box boxShadow="0px 0px 30px #8080807d" zIndex={2}>
        <Text
          className="imgText imgMove"
          fontSize="22px"
          fontWeight={400}
          color="black"
        >
          {props.text}
        </Text>
      </Box>
    </Box>
  );
};

export const TabItem = (props) => {
  return (
    <Flex
      flexDir="column"
      overflow="hidden"
      boxShadow="0px 0px 30px #8080807d"
      className={`ThemeCont ${props.animation}`}
    >
      <Box position="relative">
        <Image
          width="100%"
          height="100%"
          objectFit="cover"
          src={props.src}
          fallbackSrc="./imgs/fall.jpg"
          className="imgTheme"
        />
        <Box className="imgTHLayout"></Box>
      </Box>
      <Box boxShadow="0px 0px 30px #8080807d" zIndex={2}>
        <Text
          className="itemTabTxt"
          fontSize="18px"
          fontWeight={400}
          color="black"
        >
          {props.text}
        </Text>
      </Box>
    </Flex>
  );
};

export const TitleSection = (props) => {
  return (
    <Flex flexDir="column" alignItems="center" zIndex="2">
      <Box>
        <Heading
          size="2xl"
          fontWeight={400}
          color={props?.txtcolor}
          textAlign="center"
          {...props}
        >
          {props.title}
        </Heading>
        <Center
          className="paraTitle"
          background={props?.txtcolor || "black"}
        ></Center>
      </Box>
      <Text
        size="sm"
        color={props.txtcolor}
        mb={props?.txtcolor ? "60px" : "0px"}
        textAlign="center"
        maxW={props?.max}
      >
        {props.subtitle}
      </Text>
      <Box className="textLine"></Box>
    </Flex>
  );
};

export const ButtonTemp = (props) => {
  return (
    <Center>
      <Button
        bg="primaryColor"
        color="headColor"
        size="lg"
        my="45px"
        _hover={""}
        className={props.className}
        {...props}
      >
        {props.text}
      </Button>
    </Center>
  );
};

export const FeatreItem = (props) => {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      className={props?.className || ""}
    >
      {props.children}
      <Text size="lg" mt={4} color={props.color}>
        {props.text}
      </Text>
    </Flex>
  );
};

export const LayoutPopOver = (props) => {
  const { t } = useTranslation("layout");
  return (
    <Popover defaultIsOpen={true}>
      <PopoverTrigger>{props.children}</PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>{t("layoutPop")}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
