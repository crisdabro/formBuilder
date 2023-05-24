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
  VStack,
  Input,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Field } from "../../state/forms/types";
import { selectForms } from "../../state/forms/formsSlice";
import { addField, updateField } from "../../state/forms/formsSlice";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { FieldTexts } from "../../state/forms/types";

interface Props {
  field: Field;
  visible: boolean;
  onClose: () => void;
  isEditing?: boolean;
}

const AddFieldModal = ({ field, visible, onClose, isEditing }: Props) => {
  const dispatch = useAppDispatch();
  const { form } = useAppSelector(selectForms);

  const [formValues, setFormValues] = useState(field.texts);

  const onChange = (language: any, type: any, value: any) => {
    console.log(language, type, value);
    const newFormValues = formValues.map((formValue) => {
      if (formValue.id === language) {
        return { ...formValue, [type]: value };
      }
      return formValue;
    });
    setFormValues(newFormValues);
  };

  const handleAddButton = () => {
    isEditing
      ? dispatch(updateField({ ...field, texts: formValues }))
      : dispatch(addField({ ...field, texts: formValues }));
  };

  return (
    <Modal closeOnOverlayClick={false} isOpen={visible} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Agregar Campo</ModalHeader>
        <ModalBody pb={6}>
          {formValues.map(({ id, label, placeholder }) => {
            return (
              <VStack>
                <Box>{id}</Box>
                <VStack justifyContent="space-evenly">
                  <Box>
                    Etiqueta:
                    <Input
                      type="text"
                      value={label}
                      onChange={(e) => onChange(id, "label", e.target.value)}
                    />
                  </Box>
                  <Box>
                    Campo:
                    <Input
                      type="text"
                      value={placeholder}
                      onChange={(e) =>
                        onChange(id, "placeholder", e.target.value)
                      }
                    />
                  </Box>
                </VStack>
              </VStack>
            );
          })}
        </ModalBody>
        <ModalCloseButton />
        <ModalFooter>
          <Button onClick={handleAddButton} colorScheme="blue" mr={3}>
            Agregar
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddFieldModal;
