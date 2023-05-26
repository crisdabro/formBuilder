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
import "./editButtonWrapper.css";

interface Props {
  callback: () => void;
  children: React.ReactNode;
}

const EditButtonWrapper = ({ callback, children }: Props) => {
  return (
    <HStack className="field">
      <Box>
        <Button className="hide" onClick={callback} />
      </Box>
      {children}
    </HStack>
  );
};

export default EditButtonWrapper;
