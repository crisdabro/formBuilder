import React, { useState, useEffect, useCallback } from "react";
import { Text, Box, Button, VStack } from "@chakra-ui/react";
import { Form } from "../../state/forms/types";
import InputField from "../inputField/InputField";
import ButtonField from "../buttonField/ButtonField";
import TextField from "../textField/TextField";
import DropFieldSection from "../dropFieldSection/DropFieldSection";
import AddFieldModal from "../addFieldModal/AddFieldModal";
import { Field } from "../../state/forms/types";

interface Props {
  form: Form;
}

const FormView = ({ form }: Props) => {
  const [showAddFieldModal, setShowAddFieldModal] = useState(false);
  const [field, setField] = useState({} as Field);
  const [isEditing, setIsEditing] = useState(false);

  const handleShowAddFieldModal = (
    show: boolean,
    field: Field,
    isEditing: boolean
  ) => {
    setShowAddFieldModal(show);
    setField(field);
    setIsEditing(isEditing);
  };

  return (
    <VStack>
      {showAddFieldModal && (
        <AddFieldModal
          field={field}
          visible={showAddFieldModal}
          onClose={() => setShowAddFieldModal(false)}
          isEditing={isEditing}
        />
      )}
      {form.fields
        .filter(({ type }) => type !== "button")
        .map((field) => {
          return (
            <>
              {field.type === "text" && (
                <TextField
                  key={field.id}
                  field={field}
                  handleShowAddFieldModal={handleShowAddFieldModal}
                />
              )}
              {field.type === "textInput" && (
                <InputField
                  key={field.id}
                  field={field}
                  handleShowAddFieldModal={handleShowAddFieldModal}
                />
              )}
            </>
          );
        })}
      <DropFieldSection handleShowAddFieldModal={handleShowAddFieldModal} />
      {form.fields
        .filter(({ type }) => type === "button")
        .map((field) => {
          return (
            <>
              <ButtonField
                key={field.id}
                field={field}
                handleShowAddFieldModal={handleShowAddFieldModal}
              />
            </>
          );
        })}
    </VStack>
  );
};

export default FormView;
