import pc_line from "@/assets/images/desktop/line2.png";
import pc_map from "@/assets/images/desktop/map.png";
import m_line from "@/assets/images/mobile/line.png";
import m_map from "@/assets/images/mobile/map.png";
import clsx from "clsx";
import SvgIcon from "../Common/SvgIcon";

const Transportation = () => {
  const transportationList = [
    {
      icon: "ic_car",
      title: "自行開車",
      content:
        "如果您選擇自行開車，可以透過國道一號下高雄交流道，往市區方向行駛，並依路標指示即可抵達「享樂酒店」。飯店內設有停車場，讓您停車方便。",
    },
    {
      icon: "ic_train",
      title: "高鐵/火車",
      content:
        "如果您是搭乘高鐵或火車，可於左營站下車，外頭有計程車站，搭乘計程車約20分鐘即可抵達。或者您也可以轉乘捷運紅線至中央公園站下車，步行約10分鐘便可抵達。",
    },
    {
      icon: "ic_luxurycar",
      title: "禮賓車服務",
      content:
        "承億酒店提供禮賓專車接送服務，但因目的地遠近會有不同的收費，請撥打電話將由專人為您服務洽詢專線：(07)123-4567",
    },
  ];
  return (
    <>
      <div
        className={clsx(
          "relative",
          "pt-[80px] md:pt-[120px] pb-[124px] md:pb-[267px] px-[40px] sm:px-[80px] lg:px-[120px]"
        )}
      >
        <div className={clsx("max-w-[1296px]", "text-neutral_0", "mx-auto")}>
          <div className="flex items-center mb-[40px] md:mb-[80px]">
            <h2 className="h3 md:h1 text-primary_100 mr-[40px]">
              交通
              <br />
              方式
            </h2>
            <div
              className="w-[200px] md:w-[167px] h-[2px]"
              style={{
                background: "linear-gradient(90deg, #BE9C7C, #FFFFFF)",
              }}
            />
          </div>
          <p className="title mb-[16px]">台灣高雄市新興區六角路123號</p>
          <picture>
            <source media="(max-width: 750px)" srcSet={m_map} />
            <img
              src={pc_map}
              className="w-full h-full mb-[24px] md:mb-[40px]"
            />
          </picture>
          <ul className="flex flex-col md:flex-row gap-[24px]">
            {transportationList.map((item) => {
              return (
                <li key={item.title}>
                  <SvgIcon
                    svgClass="text-primary_100 w-[48px] h-[48px] lg:w-[80px] lg:h-[80px] mb-[8px] md:mb-[16px]"
                    name={item.icon}
                  />
                  <h3 className="title lg:h5 mb-[8px]">{item.title}</h3>
                  <p className="body_2 lg:body">{item.content}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <picture className="absolute left-0 bottom-0 w-full">
          <source media="(max-width: 750px)" srcSet={m_line} />
          <img
            src={pc_line}
            className="w-full h-[84px] md:h-[120px] lg:h-[188px]"
          />
        </picture>
      </div>
    </>
  );
};

export default Transportation;
