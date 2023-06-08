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
import EditButtonWrapper from "../editButtonWrapper/EditButtonWrapper";
import "./inputField.css";

interface Props {
  field: Field;
  handleShowAddFieldModal: (
    show: boolean,
    field: Field,
    isEditing: boolean
  ) => void;
  mainColor: string;
  secondaryColor: string;
}

const InputField = ({
  field,
  handleShowAddFieldModal,
  mainColor = "white",
  secondaryColor = "black",
}: Props) => {
  const { value, texts, readOnly } = field;
  const { label, helper, placeholder } = texts[0];

  return (
    <EditButtonWrapper
      field={field}
      callback={() => handleShowAddFieldModal(true, field, true)}
    >
      <Box style={{ width: "100%", margin: "8px 0px 0px 0px" }}>
        <FormControl isInvalid={false}>
          <FormLabel color={secondaryColor}>{label}</FormLabel>
          <Input
            _placeholder={{ color: secondaryColor }}
            borderColor={secondaryColor}
            type="text"
            placeholder={placeholder}
            readOnly
          />
          <FormHelperText>{helper}</FormHelperText>
          <FormErrorMessage>error.</FormErrorMessage>
        </FormControl>
      </Box>
    </EditButtonWrapper>
  );
};

export default InputField;
