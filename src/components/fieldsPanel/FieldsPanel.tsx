import React, { useState, useEffect, useCallback } from "react";
import { Text, Box, VStack, Heading } from "@chakra-ui/react";
import { Field } from "../../state/forms/types";
import { selectForms, startDrag, endDrag } from "../../state/forms/formsSlice";
import { useAppDispatch, useAppSelector } from "../../state/hooks";

const FieldsPanel = () => {
  const dispatch = useAppDispatch();
  const { templateFields } = useAppSelector(selectForms);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, id: string) => {
    e.dataTransfer.setData("text", `${id}`);
    dispatch(startDrag(id));
  };

  const handleDragEnd = (id: string) => {
    dispatch(endDrag(id));
  };

  return (
    <VStack backgroundColor="blue.100" padding={2}>
      <Heading>Fields</Heading>
      {templateFields.map((field: Field) => {
        return (
          <Box
            key={field.id}
            draggable
            onDragStart={(e) => handleDragStart(e, field.id)}
            onDragEnd={() => handleDragEnd(field.id)}
          >
            <Text>{field.name}</Text>
          </Box>
        );
      })}
    </VStack>
  );
};

export default FieldsPanel;
