import {
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
  Box,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { TabItem } from "../../ReusableComponsnts";
import {
  all,
  HomeSliders,
  HomeImages,
  HomeParallax,
  Special,
  Video,
} from "./data";
import { useState } from "react";
export const MobileLayout = () => {
  const [active, setActive] = useState("all");
  const handleChange = (value) => {
    setActive(value);
  };
  return (
    <Box
      display={["flex", "flex", "none"]}
      flexDir="column"
      alignItems="center"
      gap="30px"
    >
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          bg="primaryColor"
          color="headColor"
          w="150px"
        >
          Filters
        </MenuButton>
        <MenuList>
          <MenuOptionGroup
            defaultValue="all"
            type="radio"
            onChange={handleChange}
          >
            <MenuItemOption value="all"> All</MenuItemOption>
            <MenuItemOption value="slider">Home Slider</MenuItemOption>
            <MenuItemOption value="image">Home Image</MenuItemOption>
            <MenuItemOption value="parallax">Home Parallax</MenuItemOption>
            <MenuItemOption value="special">Home Special</MenuItemOption>
            <MenuItemOption value="video">Home Video</MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
      {active === "all" && (
        <SimpleGrid columns={[1, 2, 4]} spacing={8}>
          {all?.map((item) => (
            <TabItem
              key={item.id}
              src={item.src}
              text={item.text}
              animation="tabItemAnimate"
            />
          ))}
        </SimpleGrid>
      )}

      {active === "slider" && (
        <SimpleGrid columns={[1, 2, 4]} spacing={8}>
          {HomeSliders?.map((item) => (
            <TabItem
              key={item.id}
              src={item.src}
              text={item.text}
              animation="tabHomeAnimate"
            />
          ))}
        </SimpleGrid>
      )}

      {active === "image" && (
        <SimpleGrid columns={[1, 2, 4]} spacing={8}>
          {HomeImages?.map((item) => (
            <TabItem
              key={item.id}
              src={item.src}
              text={item.text}
              animation="tabHomeAnimate"
            />
          ))}
        </SimpleGrid>
      )}

      {active === "parallax" && (
        <SimpleGrid columns={[1, 2, 4]} spacing={8}>
          {HomeParallax?.map((item) => (
            <TabItem
              key={item.id}
              src={item.src}
              text={item.text}
              animation="tabHomeAnimate"
            />
          ))}
        </SimpleGrid>
      )}

      {active === "special" && (
        <SimpleGrid columns={[1, 2, 4]} spacing={8}>
          {Special?.map((item) => (
            <TabItem
              key={item.id}
              src={item.src}
              text={item.text}
              animation="tabHomeAnimate"
            />
          ))}
        </SimpleGrid>
      )}

      {active === "video" && (
        <SimpleGrid columns={[1, 2, 4]} spacing={8}>
          {Video?.map((item) => (
            <TabItem
              key={item.id}
              src={item.src}
              text={item.text}
              animation="tabItemEndAnimate"
            />
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};
