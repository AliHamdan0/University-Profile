import { Heading, Box, Flex, Icon } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { BsReverseLayoutTextWindowReverse } from "react-icons/bs";
import { ProgLayout } from "../Layout/progLayout";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { layoutSlice } from "../../reduxToolkit/Slices/layout";
export const LaySection = () => {
  const { t } = useTranslation("layout");
  const dispatch = useDispatch();
  const { actions } = layoutSlice;
  const { layout } = actions;
  const dataLayout = useSelector((state) => state.layoutSlice.layout);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;
    // dropped outside the list
    if (!destination) {
      return;
    }
    if (source.droppableId === destination.droppableId) {
      const items = reorder(dataLayout, source.index, destination.index);
      dispatch(layout(items));
    } else {
      return;
    }
  };
  return (
    <Flex flexDir="column">
      <Flex alignItems="center" mb={5}>
        <Icon
          as={BsReverseLayoutTextWindowReverse}
          w={30}
          h={30}
          color="primaryColor"
        />
        <Heading size="sm" fontWeight="500" mx="6px">
          {t("LayoutSection")}
        </Heading>
      </Flex>
      <Box>
        <DragDropContext onDragEnd={onDragEnd}>
          <ProgLayout />
        </DragDropContext>
      </Box>
    </Flex>
  );
};
