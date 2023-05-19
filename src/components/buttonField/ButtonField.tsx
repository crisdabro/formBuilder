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
  isEditing?: boolean;
}

const ButtonField = ({
  field = {
    id: "confirm",
    label: "",
    type: "text",
    value: "Button text",
    placeholder: "Button text",
    required: true,
    readOnly: false,
  },
  isEditing = false,
}: Props) => {
  const { label, helper, readOnly } = field || {};
  return (
    <Box style={{ marginTop: "8px", width: "100%" }}>
      {isEditing ? (
        <Button className="button" colorScheme="blue">
          <InputField field={field} isEditing />
        </Button>
      ) : (
        <Button style={{ width: "100%" }} colorScheme="blue">
          {label}
        </Button>
      )}
    </Box>
  );
};

export default ButtonField;
