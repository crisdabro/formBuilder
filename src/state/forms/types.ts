export interface Field {
  id: string;
  order?: number;
  value: string;
  type: InputType;
  texts: FieldTexts[];
  required: boolean;
  readOnly: boolean;
  name?: string;
  isDragging?: boolean;
}

export interface FieldTexts {
  id: string;
  label?: string;
  placeholder?: string;
  helper?: string;
}

export interface Options {
  languages: Language[];
  mainColor: string;
  secondaryColor: string;
}

export interface Form {
  name: string;
  status: Status;
  fields: Field[];
  options: Options;
}

export interface DragEvent {
  event: React.DragEvent<HTMLDivElement>;
  id: string;
}

export type Status = "idle" | "loading" | "failed";

export type Language = "castellano" | "english" | "catallà";

export type InputType = "textInput" | "text" | "button";
