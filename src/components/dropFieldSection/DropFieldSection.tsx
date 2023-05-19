import React, { useState, useEffect, useCallback } from "react";
import {
  Text,
  Box,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Field } from "../../state/forms/types";
import { selectFields } from "../../state/forms/fieldsSlice";
import { addField } from "../../state/forms/formsSlice";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import "./dropFieldSection.css";

interface Props {
  field: Field;
  isEditing?: boolean;
}

const DropFieldSection = () => {
  const dispatch = useAppDispatch();
  const { fields } = useAppSelector(selectFields);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const field = fields.find((f) => f.id === e.dataTransfer.getData("text"));
    if (field) {
      dispatch(addField(field));
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) =>
    e.preventDefault();

  return (
    <Box
      backgroundColor="blue.100"
      width="100%"
      height="50px"
      textAlign={"center"}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      Drop Field Section
    </Box>
  );
};

export default DropFieldSection;
