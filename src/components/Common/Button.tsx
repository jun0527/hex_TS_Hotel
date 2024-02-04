import clsx from "clsx";
import { ReactNode, useEffect, useState } from "react";

type Props = {
  title: string;
  buttonStyle: string;
  defaultClass?: string;
  children?: ReactNode;
  buttonType?: "button" | "submit";
  disabled?: boolean;
};
const Button = ({
  title,
  buttonStyle,
  defaultClass,
  children,
  buttonType = "button",
  disabled,
}: Props) => {
  const [className, setClassName] = useState("");
  useEffect(() => {
    switch (buttonStyle) {
      case "primary":
        setClassName(
          `${defaultClass} 
            ${clsx(
              "bg-primary_100 text-neutral_0",
              "rounded-[8px]",
              "flex items-center justify-center",
              "hover:bg-primary_120",
              "disabled:bg-neutral_40 disabled:text-neutral_60 disabled:cursor-not-allowed"
            )}`
        );
        break;
      case "ghost":
        setClassName(
          `${defaultClass} 
              ${clsx(
                "text-neutral_0",
                "flex item-center justify-center",
                "hover:text-primary_100",
                "disabled:text-neutral_60 disabled:cursor-not-allowed"
              )}`
        );
        break;
    }
  }, [buttonStyle]);
  return (
    <button
      type={buttonType}
      className={`.title ${className}`}
      disabled={disabled}
    >
      {title}
      {children}
    </button>
  );
};

export default Button;
