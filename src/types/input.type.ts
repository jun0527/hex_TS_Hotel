import { FieldValues, RegisterOptions } from "react-hook-form";

export type InputSetting = {
  id: string;
  labelText: string;
  type: string;
  placeholder: string;
  rules: RegisterOptions<FieldValues>;
  defaultValue: string;
};
