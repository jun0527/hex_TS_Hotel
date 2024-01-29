import { ReactNode } from "react";
import Carousel from "../Common/Carousel";
import Header from "./Header";
import { desktopImgList, mobileImgList } from "./bannerData";

type Props = {
  children: ReactNode;
};
const BannerHeader = ({ children }: Props) => {
  return (
    <>
      <div className="w-full h-[812px] md:h-[1080px] relative">
        <Carousel desktopImgList={desktopImgList} mobileImgList={mobileImgList}>
          <div className="w-full h-full absolute top-0">
            <Header />
            {children}
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default BannerHeader;
