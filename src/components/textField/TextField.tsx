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

interface Props {
  field: Field;
  handleShowAddFieldModal: (
    show: boolean,
    field: Field,
    isEditing: boolean
  ) => void;
}

const TextField = ({ field, handleShowAddFieldModal }: Props) => {
  const { texts } = field;
  const { helper, placeholder } = texts[0];

  return (
    <EditButtonWrapper
      callback={() => handleShowAddFieldModal(true, field, true)}
    >
      <Box style={{ marginTop: "8px", width: "100%" }}>
        <FormControl isInvalid={false}>
          <FormLabel>{placeholder}</FormLabel>
        </FormControl>
      </Box>
    </EditButtonWrapper>
  );
};

export default TextField;
