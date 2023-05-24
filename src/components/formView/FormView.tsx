import React, { useState, useEffect, useCallback } from "react";
import { Text, Box, Button, VStack } from "@chakra-ui/react";
import { Form } from "../../state/forms/types";
import InputField from "../inputField/InputField";
import ButtonField from "../buttonField/ButtonField";
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
      {form.fields.map((field) => {
        return (
          <>
            <InputField
              key={field.id}
              field={field}
              handleShowAddFieldModal={handleShowAddFieldModal}
            />
          </>
        );
      })}
      <DropFieldSection handleShowAddFieldModal={handleShowAddFieldModal} />
      <ButtonField key={"confirm-button"} />
    </VStack>
  );
};

export default FormView;
