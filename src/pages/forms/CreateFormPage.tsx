import React, { useState, useEffect, useCallback } from "react";
import {
  Text,
  Box,
  Link,
  Spinner,
  UnorderedList,
  ListItem,
  Stack,
  StackDivider,
  Heading,
  Card,
  CardHeader,
  CardBody,
  VStack,
  HStack,
} from "@chakra-ui/react";

import { useAppDispatch, useAppSelector } from "../../state/hooks";
import FieldsPanel from "../../components/fieldsPanel/FieldsPanel";
import FormView from "../../components/formView/FormView";
import { selectForms, addField } from "../../state/forms/formsSlice";
import FormOptionsPanel from "../../components/formOptionsPanel/FormOptionsPanel";

const CreateFormPage = () => {
  const dispatch = useAppDispatch();
  const { form } = useAppSelector(selectForms);

  useEffect(() => {}, []);

  return (
    <Box>
      <HStack justifyContent="space-between" alignItems="start">
        <FieldsPanel />
        <FormView form={form} />
        <FormOptionsPanel />
      </HStack>
    </Box>
  );
};

export default CreateFormPage;
