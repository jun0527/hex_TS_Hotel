import clsx from "clsx";
import {
  FieldError,
  FieldValues,
  RegisterOptions,
  UseControllerProps,
  UseFormRegister,
} from "react-hook-form";
interface Props<T extends FieldValues> extends UseControllerProps<T> {
  id: string;
  type: string;
  error?: FieldError | undefined;
  register: UseFormRegister<FieldValues>;
  rules?: RegisterOptions<FieldValues>;
  placeholder?: string;
  inputClass?: string;
}
const Input = <T extends FieldValues>({
  id,
  type,
  error,
  register,
  rules,
  placeholder,
  inputClass,
}: Props<T>) => {
  return (
    <>
      <div className="flex flex-col relative">
        <input
          type={type}
          id={id}
          {...register(id, rules)}
          placeholder={placeholder}
          className={clsx(
            inputClass,
            "h-[56px]",
            "text-neutral_80 placeholder:text-neutral_60",
            "border border-neutral_40",
            "rounded-[8px]",
            "p-[16px] mb-[20px]",
            "focus:border-primary_100",
            "focus-within:outline-none",
            "disabled:text-neutral_60",
            error && "border-alert_100"
          )}
        />
        {error && (
          <p className="subtitle text-alert_100 absolute top-[56px]">
            {error?.message}
          </p>
        )}
      </div>
    </>
  );
};
export default Input;
