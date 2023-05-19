import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  current,
} from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../store";
import { Form, Field, DragEvent } from "./types";
import { STATUS } from "../../helpers/constants";

export interface FormState {
  fields: Field[];
}
const initialState: FormState = {
  fields: [
    {
      id: "1",
      name: "Text Input",
      label: "label text",
      type: "text",
      value: "",
      placeholder: "enter text",
      helper: "helper text",
      required: true,
      readOnly: false,
      isDragging: false,
    },
  ],
};

export const fieldsSlice = createSlice({
  name: "fields",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    startDrag: (state, action: PayloadAction<string>) => {
      const field = state.fields.find((f) => f.id === action.payload);
      if (field) {
        field.isDragging = true;
      }
    },
    endDrag: (state, action: PayloadAction<string>) => {
      const field = state.fields.find((f) => f.id === action.payload);
      if (field) {
        field.isDragging = true;
      }
    },
  },

  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {},
});

export const { startDrag, endDrag } = fieldsSlice.actions;

export const selectFields = (state: RootState) => state.fields;

export default fieldsSlice.reducer;
