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
  color: string;
}

const TextField = ({
  field,
  handleShowAddFieldModal,
  color = "black",
}: Props) => {
  const { texts } = field;
  const { helper, placeholder } = texts[0];

  return (
    <EditButtonWrapper
      callback={() => handleShowAddFieldModal(true, field, true)}
    >
      <Box style={{ width: "100%", margin: "8px 0px 0px 0px" }}>
        <FormControl isInvalid={false}>
          <FormLabel color={color}>{placeholder}</FormLabel>
        </FormControl>
      </Box>
    </EditButtonWrapper>
  );
};

export default TextField;
