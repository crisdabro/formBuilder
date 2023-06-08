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
  mainColor?: string;
  secondaryColor?: string;
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
  mainColor = "white",
  secondaryColor = "black",
}: Props) => {
  const { texts, readOnly } = field || {};
  const { placeholder } = texts[0] || {};
  return (
    <EditButtonWrapper
      field={field}
      callback={() => handleShowAddFieldModal(true, field, true)}
    >
      <Box style={{ width: "100%", margin: "8px 0px 0px 0px" }}>
        <Button
          style={{ width: "100%" }}
          color={mainColor}
          backgroundColor={secondaryColor}
        >
          {placeholder}
        </Button>
      </Box>
    </EditButtonWrapper>
  );
};

export default ButtonField;
