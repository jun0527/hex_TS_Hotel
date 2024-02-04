import clsx from "clsx";
type Props = {
  labelText: string;
  id: string;
  className?: string;
};
const Label = ({ labelText, id, className }: Props) => {
  return (
    <label htmlFor={id} className={clsx(className, "title mb-[8px] block")}>
      {labelText}
    </label>
  );
};

export default Label;
