import logo_white from "@/assets/images/logo_white.svg";
import clsx from "clsx";
import SvgIcon from "../Common/SvgIcon";
type Props = {
  className?: string;
};

const community = [
  {
    name: "instagram",
    icon: "ic_instagram",
  },
  {
    name: "line",
    icon: "bi_line",
  },
];
const connections = [
  {
    title: "TEL",
    content: "+886-7-1234567",
  },
  {
    title: "MAIL",
    content: "elh@hexschool.com",
  },
  {
    title: "FAX",
    content: "+886-7-1234567",
  },
  {
    title: "WEB",
    content: "www.elhhexschool.com.tw",
  },
];

const Footer = ({ className }: Props) => {
  return (
    <>
      <div
        className={clsx(
          className,
          "pt-[80px] pb-[80px] md:pb-[120px] px-[12px] sm:px-[80px] lg:px-[120px] text-neutral_0"
        )}
      >
        <div className={clsx("max-w-[1296px]", "mx-auto")}>
          <div className="flex flex-col lg:flex-row justify-between gap-[40px] mb-[80px]">
            <div>
              <img
                src={logo_white}
                className="w-[196px] h-[72px] mb-[40px] md:mb-[80px]"
              />
              <ul className="flex gap-[16px]">
                {community.map((item) => {
                  return (
                    <li key={item.name}>
                      <button
                        type="button"
                        className="p-[8px] border border-neutral_0 rounded-full group hover:border-primary_100"
                      >
                        <SvgIcon
                          svgClass="w-[24px] h-[24px] group-hover:text-primary_100"
                          name={item.icon}
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
            <ul className="grid lg:grid-cols-2 gap-y-[16px] lg:gap-x-[80px] lg:place-content-between">
              {connections.map((connection) => {
                return (
                  <li key={connection.title}>
                    <h5 className="title mb-[8px]">{connection.title}</h5>
                    <p className="body_2 md:body">{connection.content}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between gap-[16px]">
            <p className="body_2 md:body">806023 台灣高雄市新興區六角路123號</p>
            <p className="body_2 md:body">
              © 享樂酒店 2023 All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
