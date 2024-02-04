import { ImageItem } from "@/types/image.type";
import clsx from "clsx";
import { ReactNode, useEffect, useState } from "react";
interface Props {
  imageList: ImageItem[];
  children?: ReactNode;
}
const Carousel = ({ imageList, children }: Props) => {
  const [, setTime] = useState(0);
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((pre) => {
        if (pre === 60) {
          setCurrent((pre) => (pre + 1 === imageList.length ? 0 : pre + 1));
          return 0;
        }

        return pre + 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const handleClick = (item: ImageItem, index: number) => {
    console.log(item);

    setCurrent(index);
    setTime(0);
  };
  return (
    <>
      <div className="relative w-full h-full">
        <picture>
          <source
            media="(max-width: 750px)"
            srcSet={imageList[current].mobile}
          />
          <img
            src={imageList[current].desktop}
            className="w-full h-full object-cover"
          />
        </picture>
        <div
          className={clsx("w-full h-full absolute top-0", "bg-neutral_100/60")}
        />
        {children}
        <div
          className={clsx(
            "absolute bottom-[32px] w-full",
            "flex justify-center"
          )}
        >
          {imageList.map((item, index) => (
            <button
              key={index}
              className={clsx(
                "w-[32px] h-[4px]",
                "mr-[8px] last:mr-0 rounded-full",
                `${index === current ? "w-[60px] bg-primary_100" : "w-[32px] bg-primary_40"}`
              )}
              onClick={() => handleClick(item, index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
