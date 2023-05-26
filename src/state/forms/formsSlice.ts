import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  current,
} from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../store";
import { Form, Field, Language } from "./types";
import { STATUS } from "../../helpers/constants";

export interface FormState {
  form: Form;
  templateFields: Field[];
  isDragging: boolean;
}
const initialState: FormState = {
  form: {
    name: "form",
    status: "idle",
    fields: [
      {
        id: "1",
        name: "Text Input",
        texts: [
          {
            id: "castellano",
            placeholder: "Confirmar",
          },
        ],
        type: "button",
        value: "",
        required: true,
        readOnly: false,
        isDragging: false,
      },
    ],
    options: {
      languages: ["castellano"],
    },
  },
  templateFields: [
    {
      id: "2",
      name: "Text Input",
      texts: [
        {
          id: "castellano",
          label: "Etiqueta",
          placeholder: "Campo",
        },
      ],
      type: "textInput",
      value: "",
      required: true,
      readOnly: false,
      isDragging: false,
    },
    {
      id: "3",
      name: "Text",
      texts: [
        {
          id: "castellano",
          placeholder: "Etiqueta",
        },
      ],
      type: "text",
      value: "",
      required: true,
      readOnly: false,
      isDragging: false,
    },
  ],
  isDragging: false,
};

export const formsSlice = createSlice({
  name: "forms",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addField: (state, action: PayloadAction<Field>) => {
      state.form.fields.push(action.payload);
    },
    updateField: (state, action: PayloadAction<Field>) => {
      state.form.fields = state.form.fields.map((f: Field) =>
        f.id === action.payload.id ? action.payload : f
      );
    },
    startDrag: (state, action: PayloadAction<string>) => {
      state.isDragging = true;
      const field = state.templateFields.find((f) => f.id === action.payload);
      if (field) {
        field.isDragging = true;
      }
    },
    endDrag: (state, action: PayloadAction<string>) => {
      state.isDragging = false;
      const field = state.templateFields.find((f) => f.id === action.payload);
      if (field) {
        field.isDragging = true;
      }
    },
    addLanguage: (state, action: PayloadAction<string>) => {
      state.form.options.languages.push(action.payload as Language);
      state.form.fields = state.form.fields.map((f: Field) => ({
        ...f,
        texts: f.texts.concat({
          id: action.payload,
          label: "",
          placeholder: "",
        }),
      }));
      state.templateFields = state.templateFields.map((f: Field) => ({
        ...f,
        texts: f.texts.concat({
          id: action.payload,
          label: "",
          placeholder: "",
        }),
      }));
    },
    removeLanguage: (state, action: PayloadAction<string>) => {
      const filteredLanguages = state.form.options.languages.filter(
        (l) => l !== action.payload
      );
      if (filteredLanguages.length > 0) {
        state.form.options.languages = filteredLanguages;
        state.form.fields = state.form.fields.map((f: Field) => ({
          ...f,
          texts: f.texts.filter((t) => t.id !== action.payload),
        }));
        state.templateFields = state.templateFields.map((f: Field) => ({
          ...f,
          texts: f.texts.filter((t) => t.id !== action.payload),
        }));
      }
    },
  },

  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {},
});

export const {
  addField,
  updateField,
  startDrag,
  endDrag,
  removeLanguage,
  addLanguage,
} = formsSlice.actions;

export const selectForms = (state: RootState) => state.forms;

export default formsSlice.reducer;
