import React, { useState, useEffect, useCallback } from "react";
import {
  Text,
  Box,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Field } from "../../state/forms/types";
import InputField from "../inputField/InputField";
import EditButtonWrapper from "../editButtonWrapper/EditButtonWrapper";
import "./buttonField.css";

interface Props {
  field?: Field;
  handleShowAddFieldModal: (
    show: boolean,
    field: Field,
    isEditing: boolean
  ) => void;
}

const ButtonField = ({
  field = {
    id: "confirm",
    texts: [
      {
        id: "castellano",
        placeholder: "Confirmar",
      },
    ],
    type: "button",
    value: "Button text",
    required: true,
    readOnly: false,
  },
  handleShowAddFieldModal,
}: Props) => {
  const { texts, readOnly } = field || {};
  const { placeholder } = texts[0] || {};
  return (
    <EditButtonWrapper
      callback={() => handleShowAddFieldModal(true, field, true)}
    >
      <Box style={{ marginTop: "8px", width: "100%" }}>
        <Button style={{ width: "100%" }} colorScheme="blue">
          {placeholder}
        </Button>
      </Box>
    </EditButtonWrapper>
  );
};

export default ButtonField;
