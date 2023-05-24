import React, { useState, useEffect, useCallback } from "react";
import { Text, Box, VStack, Heading, Checkbox } from "@chakra-ui/react";
import { Field } from "../../state/forms/types";
import {
  selectForms,
  removeLanguage,
  addLanguage,
} from "../../state/forms/formsSlice";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { LANGUAGES } from "../../helpers/constants";
import { Language } from "../../state/forms/types";

const FormOptionsPanel = () => {
  const dispatch = useAppDispatch();
  const { form } = useAppSelector(selectForms);

  //on checkbox change add or remove language from form
  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    language: string
  ) => {
    const { checked } = e.target;
    if (checked) {
      dispatch(addLanguage(language));
    } else {
      dispatch(removeLanguage(language));
    }
  };

  return (
    <VStack backgroundColor="blue.100" padding={2}>
      <Heading>Options</Heading>
      {LANGUAGES.map((language) => {
        return (
          <Box key={language}>
            <Checkbox
              isChecked={form.options.languages.includes(language as Language)}
              onChange={(e) => handleCheckboxChange(e, language)}
            >
              {language}
            </Checkbox>
          </Box>
        );
      })}
    </VStack>
  );
};

export default FormOptionsPanel;
