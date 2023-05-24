import React, { useState, useEffect, useCallback } from "react";
import {
  Text,
  Box,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  VStack,
  HStack,
  Button,
} from "@chakra-ui/react";
import { Field } from "../../state/forms/types";
import "./inputField.css";

interface Props {
  field: Field;
  handleShowAddFieldModal: (
    show: boolean,
    field: Field,
    isEditing: boolean
  ) => void;
}

const InputField = ({ field, handleShowAddFieldModal }: Props) => {
  const { value, texts, readOnly } = field;
  const { label, helper, placeholder } = texts[0];

  const handleEditClick = () => {
    handleShowAddFieldModal(true, field, true);
  };

  return (
    <HStack className="field">
      <Box>
        <Button className="hide" onClick={handleEditClick} />
      </Box>
      <Box style={{ marginTop: "8px", width: "100%" }}>
        <FormControl isInvalid={false}>
          <FormLabel>{label}</FormLabel>
          <Input type="text" placeholder={placeholder} readOnly />
          <FormHelperText>{helper}</FormHelperText>
          <FormErrorMessage>error.</FormErrorMessage>
        </FormControl>
      </Box>
    </HStack>
  );
};

export default InputField;
