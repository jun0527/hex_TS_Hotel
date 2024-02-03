import clsx from "clsx";
import { Link } from "react-router-dom";
import Button from "../Common/Button";
import SvgIcon from "../Common/SvgIcon";

type ButtonItem = {
  title: string;
  buttonStyle: string;
  class: string;
  to: string;
};

type Props = {
  buttons: ButtonItem[];
  closeMenu: (isOpen: boolean) => void;
  className: string;
};
const Menu = ({ buttons, closeMenu, className }: Props) => {
  return (
    <>
      <div
        className={clsx(
          className,
          "fixed inset-0 z-50",
          "bg-neutral_bg",
          "px-[20px]"
        )}
      >
        <button
          type="button"
          onClick={() => closeMenu(false)}
          className="absolute top-[16px] right-[12px]"
        >
          <SvgIcon
            name="ic_close"
            svgClass="w-[40px] h-[40px] text-neutral_0 block md:hidden cursor-pointer"
          ></SvgIcon>
        </button>
        <ul
          className={clsx(
            "flex flex-col items-center justify-center",
            "w-full h-full"
          )}
        >
          {buttons.map((button) => {
            return (
              <li key={button.title} className="w-full">
                <Button
                  title=""
                  buttonStyle={button.buttonStyle}
                  defaultClass="!w-full"
                >
                  <Link to={button.to} className={button.class}>
                    {button.title}
                  </Link>
                </Button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Menu;
