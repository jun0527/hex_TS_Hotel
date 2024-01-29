import { useMemo } from "react";

type Props = {
  name: string;
  svgClass?: string;
};
const SvgIcon = ({ name, svgClass }: Props) => {
  const symbolId = useMemo(() => `#icon-${name}`, [name]);

  return (
    <>
      <svg className={svgClass} aria-hidden="true">
        <use href={symbolId} />
      </svg>
    </>
  );
};
export default SvgIcon;
