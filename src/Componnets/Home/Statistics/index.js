import { StatisticItem } from "../../ReusableComponsnts";
import { IoDocumentTextSharp } from "react-icons/io5";
import { SimpleGrid, Center, Icon } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export const Statistics = () => {
  const { t } = useTranslation();
  return (
    <SimpleGrid columns={[1, 2, 4]} spacing={20}>
      <Center>
        <StatisticItem num={300} text={t("DEMO_LAYOUTS")}>
          <Icon
            as={IoDocumentTextSharp}
            w="60px"
            h="60px"
            color="primaryColor"
          />
        </StatisticItem>
      </Center>
      <Center>
        <StatisticItem num={400} text={t("CUPS_OF_COFFEE")}>
          <Icon
            as={IoDocumentTextSharp}
            w="60px"
            h="60px"
            color="primaryColor"
          />
        </StatisticItem>
      </Center>
      <Center>
        <StatisticItem num={200} text={t("DIFFERENT_LAYOUTS")}>
          <Icon
            as={IoDocumentTextSharp}
            w="60px"
            h="60px"
            color="primaryColor"
          />
        </StatisticItem>
      </Center>
      <Center>
        <StatisticItem num={100} text={t("READY_TO_USE_ELEMENTS")}>
          <Icon
            as={IoDocumentTextSharp}
            w="60px"
            h="60px"
            color="primaryColor"
          />
        </StatisticItem>
      </Center>
    </SimpleGrid>
  );
};
