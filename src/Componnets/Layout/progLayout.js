import { Box, Icon, Flex, Heading } from "@chakra-ui/react";
import { BiMove } from "react-icons/bi";
import Style from "../../Styles/layout.module.css";
import { useTranslation } from "react-i18next";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
export const ProgLayout = () => {
  const { t } = useTranslation();
  // const items = ["Home", "Main", "Testimonial", "Statisitics"];
  const data = useSelector((state) => state.layoutSlice.layout);

  return (
    <Flex>
      <Box boxShadow="2xl" rounded="2xl" bg="lightBackground">
        <Box
          className={Style.layCard}
          bg="#0000003b"
          pointerEvents="none"
          p={["8px 13px", "8px 13px", "10px 30px"]}
        >
          <Flex alignItems="center" gap="10px">
            <Icon as={BiMove} w={6} h={6} color="primaryColor" />
            <Heading fontSize="23px" color="primaryColor">
              {t("Header")}
            </Heading>
          </Flex>
        </Box>

        <Droppable droppableId="layout">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{ width: "100%" }}
            >
              {data?.map((item, index) => {
                return (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Box
                          className={Style.layCard}
                          p={["8px 13px", "8px 13px", "10px 30px"]}
                        >
                          <Flex alignItems="center" gap="10px">
                            <Icon
                              as={BiMove}
                              w={6}
                              h={6}
                              color="primaryColor"
                            />
                            <Heading fontSize="23px" color="primaryColor">
                              {t(item.content)}
                            </Heading>
                          </Flex>
                        </Box>
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        <Box
          className={Style.layCard}
          bg="#0000003b"
          pointerEvents="none"
          p={["8px 13px", "8px 13px", "10px 30px"]}
        >
          <Flex alignItems="center" gap="10px">
            <Icon as={BiMove} w={6} h={6} color="primaryColor" />
            <Heading fontSize="23px" color="primaryColor">
              {t("Footer")}
            </Heading>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};
