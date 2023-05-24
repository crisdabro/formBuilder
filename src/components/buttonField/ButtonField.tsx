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
import "./buttonField.css";

interface Props {
  field?: Field;
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
    type: "text",
    value: "Button text",
    required: true,
    readOnly: false,
  },
}: Props) => {
  const { texts, readOnly } = field || {};
  const { placeholder } = texts[0] || {};
  return (
    <Box style={{ marginTop: "8px", width: "100%" }}>
      <Button style={{ width: "100%" }} colorScheme="blue">
        {placeholder}
      </Button>
    </Box>
  );
};

export default ButtonField;
