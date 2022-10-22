import { Button, Flex, Heading, Select, Grid } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { themeSlice } from "../../reduxToolkit/Slices/themes";
import { useState } from "react";

export const ColorSection = () => {
  const { t } = useTranslation("layout");
  const primaryColor = useSelector(
    (state) => state.themeSlice.theme.primaryColor
  );
  const ffamily = useSelector((state) => state.themeSlice.theme.fontFamily);
  const fsize = useSelector((state) => state.themeSlice.theme.fontSize);
  const [family, setFamily] = useState(ffamily);
  const [size, setSize] = useState(fsize);
  const [primary, setPrimary] = useState(primaryColor);
  const dispatch = useDispatch();
  const { actions } = themeSlice;

  const hanldeLayout = () => {
    dispatch(actions.fontFamily(family));
    dispatch(actions.fontSize(size));
    dispatch(actions.primaryColor(primary));
  };
  return (
    <Flex flexDir="column" gap={5}>
      <Grid templateColumns="100px 1fr" gap={4} alignItems="center">
        <Heading as="h6" size="sm">
          {t("primary_color")}
        </Heading>
        <input
          type="color"
          value={primary}
          onChange={(e) => setPrimary(e.target.value)}
          style={{ cursor: "pointer" }}
        />
      </Grid>
      <Grid templateColumns="100px 1fr" gap={4} alignItems="center">
        <Heading as="h6" size="sm">
          {t("font_Family")}
        </Heading>
        <Select value={family} onChange={(e) => setFamily(e.target.value)}>
          <option value="Roboto">Roboto</option>
          <option value="Cairo">Cairo</option>
          <option value="Oswald">Oswald</option>
        </Select>
      </Grid>
      <Grid templateColumns="100px 1fr" gap={4} alignItems="center">
        <Heading as="h6" size="sm">
          {t("font_Size")}
        </Heading>
        <Select value={size} onChange={(e) => setSize(e.target.value)}>
          <option value="0.7">Small</option>
          <option value="1">Normal</option>
          <option value="1.4">Large</option>
        </Select>
      </Grid>
      <Button
        bg="primaryColor"
        color="headColor"
        size="lg"
        _hover=""
        width="fit-content"
        mt="15px"
        onClick={hanldeLayout}
      >
        {t("save")}
      </Button>
    </Flex>
  );
};
