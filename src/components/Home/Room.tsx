import { roomImgList } from "@/data/roomImgList";
import { roomList } from "@/data/roomList";
import clsx from "clsx";
import { useState } from "react";
import Carousel from "../Common/Carousel";
import IconButton from "../Common/IconButton";
const Room = () => {
  const [currentRoom, setCurrentRoom] = useState(0);
  const setRoom = (state: string) => {
    switch (state) {
      case "next":
        setCurrentRoom(
          currentRoom + 1 === roomList.length ? 0 : currentRoom + 1
        );
        break;
      case "pre":
        setCurrentRoom(
          currentRoom - 1 < 0 ? roomList.length - 1 : currentRoom - 1
        );
        break;
    }
  };
  return (
    <>
      <div
        className={clsx(
          "flex flex-col md:flex-row md:items-end gap-[24px] md:gap-[80px]",
          "py-[80px] md:py-[120px] px-[12px] md:pr-[40px]"
        )}
      >
        <div className="w-full md:w-[600px] lg:w-[900px] h-[300px] sm:h-[600px] lg:h-[900px] rounded-r-[8px] overflow-hidden">
          <Carousel
            imageList={roomImgList[roomList[currentRoom].imgListName]}
          ></Carousel>
        </div>
        <div className={clsx("md:w-[628px]", "text-neutral_0")}>
          <h2 className="h4 sm:h2 mb-[16px]">{roomList[currentRoom].title}</h2>
          <p className="body_2 sm:body mb-[40px]">
            {roomList[currentRoom].content}
          </p>
          <p className="h5 sm:h3 mb-[40px]">{roomList[currentRoom].price}</p>
          <button
            type="button"
            className={clsx(
              "w-full h-[64px] lg:h-[116px]",
              "flex justify-end items-center",
              "bg-neutral_0",
              "title md:text-[24px] font-bold",
              "p-[40px] rounded-[8px]",
              "hover:bg-primary_100 group",
              "mb-[40px]"
            )}
          >
            <p className="mr-[16px] text-neutral_100 group-hover:text-neutral_0">
              查看更多
            </p>
            <div className="w-[80px] md:w-[150px] h-[1px] bg-neutral_100 group-hover:bg-neutral_0"></div>
          </button>
          <div className="flex justify-end">
            <IconButton
              name="ic_ArrowLeft"
              svgClass="w-[24px] h-[24px] text-primary_100 group-hover:text-primary_120"
              className="group w-[56px] h-[56px]"
              onClick={() => setRoom("pre")}
            />
            <IconButton
              name="ic_ArrowRight"
              svgClass="w-[24px] h-[24px] text-primary_100 group-hover:text-primary_120"
              className="group w-[56px] h-[56px]"
              onClick={() => setRoom("next")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Room;
