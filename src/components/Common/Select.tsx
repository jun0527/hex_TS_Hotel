import clsx from "clsx";
import {
  FieldValues,
  UseControllerProps,
  UseFormRegister,
} from "react-hook-form";
interface Props<T extends FieldValues> extends UseControllerProps<T> {
  id: string;
  register: UseFormRegister<FieldValues>;
  inputClass?: string;
  options: number[] | string[];
}

const Select = <T extends FieldValues>({
  id,
  register,
  options,
  defaultValue,
}: Props<T>) => {
  return (
    <select
      id={id}
      defaultValue={defaultValue}
      {...register(id)}
      className={clsx(
        "h-[56px]",
        "text-neutral_80",
        "border border-neutral_40",
        "rounded-[8px]",
        "p-[16px] mb-[20px]",
        "focus:border-primary_100",
        "focus-within:outline-none"
      )}
    >
      {options.map((option) => {
        return (
          <option className="text-neutral_100 " key={option} value={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
