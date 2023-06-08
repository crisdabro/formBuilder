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

import { moveUp } from "../../state/forms/formsSlice";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import "./editButtonWrapper.css";

interface Props {
  callback: () => void;
  children: React.ReactNode;
  field: Field;
}

const EditButtonWrapper = ({ field, callback, children }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <HStack className="field" justifyContent="space-between">
      <VStack className="button-left">
        <Box>
          <Button className=" hide" onClick={() => dispatch(moveUp(field))} />
        </Box>
      </VStack>
      {children}
      <VStack className="button-right">
        <Box>
          <Button className="button-right hide" onClick={callback} />
        </Box>
      </VStack>
    </HStack>
  );
};

export default EditButtonWrapper;
