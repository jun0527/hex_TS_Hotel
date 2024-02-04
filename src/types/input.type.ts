import { FieldValues, RegisterOptions } from "react-hook-form";

export type InputSetting = {
  id: string;
  labelText: string;
  type: string;
  placeholder: string;
  rules: RegisterOptions<FieldValues>;
  defaultValue: string;
};

export type InputGroup = {
  id: string;
  labelText: string;
  class?: string;
  input: InputItem[] | SelectItem[] | (InputItem | SelectItem)[];
};
export type InputItem = {
  id: string;
  type: string;
  placeholder: string;
  rules?: RegisterOptions<FieldValues>;
  defaultValue: string | number;
  class?: string;
};

export type SelectItem = {
  id: string;
  type: "select";
  rules?: RegisterOptions<FieldValues>;
  defaultValue: string | number;
  options: number[] | string[];
  class?: string;
};
