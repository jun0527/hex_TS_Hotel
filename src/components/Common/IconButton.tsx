import clsx from "clsx";
import SvgIcon from "./SvgIcon";
type Props = {
  name: string;
  svgClass?: string;
  className?: string;
  onClick?: () => void;
};
const IconButton = ({ name, svgClass, className, onClick }: Props) => {
  return (
    <>
      <button
        type="button"
        className={clsx(className, "flex items-center justify-center")}
        onClick={onClick}
      >
        <SvgIcon name={name} svgClass={svgClass} />
      </button>
    </>
  );
};

export default IconButton;
