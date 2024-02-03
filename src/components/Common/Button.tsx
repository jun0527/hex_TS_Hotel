import clsx from "clsx";
import { ReactNode, useEffect, useState } from "react";

type Props = {
  title: string;
  buttonStyle: string;
  defaultClass?: string;
  children?: ReactNode;
};
const Button = ({ title, buttonStyle, defaultClass, children }: Props) => {
  const [className, setClassName] = useState("");
  useEffect(() => {
    switch (buttonStyle) {
      case "primary":
        setClassName(
          `${defaultClass} 
            ${clsx(
              "bg-primary_100 text-neutral_0",
              "rounded-[8px]",
              "flex item-center justify-center",
              "hover:bg-primary_120",
              "disabled:bg-transparent disabled:text-neutral_60"
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
                "disabled:text-neutral_60"
              )}`
        );
        break;
    }
  }, [buttonStyle]);
  return (
    <button type="button" className={`.title ${className}`}>
      {title}
      {children}
    </button>
  );
};

export default Button;
