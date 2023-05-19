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
import "./inputField.css";

interface Props {
  field: Field;
  isEditing?: boolean;
}

const InputField = ({ field, isEditing = false }: Props) => {
  const { value, label, placeholder, helper, readOnly } = field;
  return (
    <Box style={{ marginTop: "8px", width: "100%" }}>
      <FormControl isInvalid={false}>
        {isEditing ? (
          <>
            {label && (
              <Input className="input" type="text" placeholder={"label"} />
            )}
            <Input
              className="input-border"
              type="text"
              placeholder="place holder"
            />
            {helper && (
              <Input className="input" type="text" placeholder="helper" />
            )}
          </>
        ) : (
          <>
            <FormLabel>{label}</FormLabel>
            <Input type="text" placeholder={value} readOnly={readOnly} />
            <FormHelperText>{helper}</FormHelperText>
          </>
        )}
        <FormErrorMessage>error.</FormErrorMessage>
      </FormControl>
    </Box>
  );
};

export default InputField;
