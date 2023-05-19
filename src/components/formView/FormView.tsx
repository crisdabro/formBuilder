import React, { useState, useEffect, useCallback } from "react";
import { Text, Box, Button, VStack } from "@chakra-ui/react";
import { Form } from "../../state/forms/types";
import InputField from "../inputField/InputField";
import ButtonField from "../buttonField/ButtonField";
import DropFieldSection from "../dropFieldSection/DropFieldSection";

interface Props {
  form: Form;
}

const FormView = ({ form }: Props) => {
  return (
    <VStack>
      <Box>Drop Section</Box>
      {form.fields.map((field) => {
        return <InputField key={field.id} field={field} isEditing />;
      })}
      <DropFieldSection />
      <ButtonField key={"confirm-button"} isEditing />
    </VStack>
  );
};

export default FormView;
