import React, { useState, useEffect, useCallback } from "react";
import {
  Text,
  Box,
  VStack,
  Heading,
  Checkbox,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Input,
} from "@chakra-ui/react";
import { Field } from "../../state/forms/types";
import {
  selectForms,
  removeLanguage,
  addLanguage,
  updateMainColor,
  updateSecondaryColor,
} from "../../state/forms/formsSlice";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { LANGUAGES } from "../../helpers/constants";
import { Language } from "../../state/forms/types";

const FormOptionsPanel = () => {
  const dispatch = useAppDispatch();
  const { form } = useAppSelector(selectForms);

  //handle color change
  const handleColorChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    mainColor: boolean = true
  ) => {
    const { value } = e.target;
    mainColor
      ? dispatch(updateMainColor(value))
      : dispatch(updateSecondaryColor(value));
  };

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

  //handle save form
  const handleSaveForm = () => {
    console.log("save form", form);
  };

  return (
    <VStack style={{ border: "1px solid lightblue" }} padding={2}>
      <Heading>Options</Heading>
      <Tabs variant="enclosed" style={{ width: "100%" }}>
        <TabList>
          <Tab>Idioma</Tab>
          <Tab>Colores</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {LANGUAGES.map((language) => {
              return (
                <Box key={language}>
                  <Checkbox
                    isChecked={form.options.languages.includes(
                      language as Language
                    )}
                    onChange={(e) => handleCheckboxChange(e, language)}
                  >
                    {language}
                  </Checkbox>
                </Box>
              );
            })}
          </TabPanel>
          <TabPanel>
            <Box>
              <Text>Color principal</Text>
              <Input
                type="color"
                defaultValue={"s"}
                onChange={(e) => handleColorChange(e, true)}
              />
            </Box>
            <Box>
              <Text>Color secundario</Text>
              <Input
                type="color"
                onChange={(e) => handleColorChange(e, false)}
              />
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Box>
        <Button onClick={handleSaveForm}>Save Form</Button>
      </Box>
    </VStack>
  );
};

export default FormOptionsPanel;
