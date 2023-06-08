import React, { useState, useEffect, useCallback } from "react";
import {
  ModalCloseButton,
  Box,
  Modal,
  ModalFooter,
  Button,
  ModalBody,
  ModalHeader,
  ModalOverlay,
  ModalContent,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Field } from "../../state/forms/types";
import { selectForms } from "../../state/forms/formsSlice";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import "./dropFieldSection.css";

interface Props {
  handleShowAddFieldModal: (
    show: boolean,
    field: Field,
    isEditing: boolean
  ) => void;
  mainColor: string;
}

const DropFieldSection = ({ handleShowAddFieldModal, mainColor }: Props) => {
  const dispatch = useAppDispatch();
  const { templateFields, isDragging } = useAppSelector(selectForms);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const field = templateFields.find(
      (f) => f.id === e.dataTransfer.getData("text")
    );
    if (field) {
      handleShowAddFieldModal(true, field, false);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) =>
    e.preventDefault();

  return (
    <>
      {isDragging && (
        <Box
          className="drop-section"
          style={{
            border: `1px dashed ${mainColor}`,
          }}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <AddIcon color={mainColor} />
        </Box>
      )}
    </>
  );
};

export default DropFieldSection;
