import logo_white from "@/assets/images/logo_white.svg";
import clsx from "clsx";
import { useState } from "react";
import Button from "../Common/Button";
import SvgIcon from "../Common/SvgIcon";
import Menu from "./Menu";

const Header = () => {
  const buttons = [
    {
      title: "客房旅宿",
      buttonStyle: "ghost",
      class: "p-[16px]",
    },
    {
      title: "會員登入",
      buttonStyle: "ghost",
      class: "p-[16px]",
    },
    {
      title: "立即訂房",
      buttonStyle: "primary",
      class: "px-[32px] py-[16px]",
    },
  ];
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const switchMenu = (isOpen: boolean) => {
    setIsOpenMenu(isOpen);
  };
  return (
    <>
      <header
        className={clsx(
          "w-full h-[72px] md:h-[120px]",
          "flex items-center justify-between",
          "py-[16px] px-[12px] md:px-[80px] md:py-0"
        )}
      >
        <img
          src={logo_white}
          className="w-[109px] h-[40px] md:w-[196px] md:h-[72px]"
        />
        <ul className="gap-[16px] hidden md:flex">
          {buttons.map((button) => {
            return (
              <li key={button.title}>
                <Button
                  title={button.title}
                  buttonStyle={button.buttonStyle}
                  defaultClass={button.class}
                ></Button>
              </li>
            );
          })}
        </ul>
        <button
          type="button"
          onClick={() => switchMenu(true)}
          className="block md:hidden"
        >
          <SvgIcon
            name="ic_menu"
            svgClass="w-[40px] h-[40px] text-neutral_0 cursor-pointer"
          ></SvgIcon>
        </button>
        <Menu
          buttons={buttons}
          closeMenu={switchMenu}
          className={clsx(isOpenMenu ? "block" : "!hidden", "block md:!hidden")}
        />
      </header>
    </>
  );
};

export default Header;
