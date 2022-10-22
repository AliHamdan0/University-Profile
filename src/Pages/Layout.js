import { HeadLay } from "../Componnets/Layout/HeadLay";
import { LaySection } from "../Componnets/Layout/laySection";
import { Container, Flex, SimpleGrid, Heading } from "@chakra-ui/react";
import { ColorSection } from "../Componnets/Layout/colorSection";
import { useTranslation } from "react-i18next";
export const Layout = () => {
  const { t } = useTranslation("layout");
  return (
    <Flex flexDir="column">
      <HeadLay />
      <Container maxWidth="85%" pb={100} pt={10}>
        <Heading size={["md", "md", "xl"]} fontWeight="500" mb="10vh">
          {t("LayoutTitle")}
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} spacing={20}>
          <ColorSection />
          <LaySection />
        </SimpleGrid>
      </Container>
    </Flex>
  );
};
