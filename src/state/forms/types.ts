export interface Field {
  id: string;
  value: string;
  type: string;
  label: string;
  placeholder: string;
  helper?: string;
  required: boolean;
  readOnly: boolean;
  name?: string;
  isDragging?: boolean;
}

export interface Form {
  name: string;
  status: Status;
  fields: Field[];
}

export interface DragEvent {
  event: React.DragEvent<HTMLDivElement>;
  id: string;
}

export type Status = "idle" | "loading" | "failed";
