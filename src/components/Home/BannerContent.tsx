import clsx from "clsx";
const BannerContent = () => {
  return (
    <>
      <div
        className={clsx(
          "flex flex-col items-center",
          "lg:flex-row lg:justify-between",
          "mx-[20px] md:mx-[80px]"
        )}
        style={{ height: `calc(100% - 120px)` }}
      >
        <div
          className={clsx(
            "w-[636px] h-[169px] lg:h-[125px]",
            "grow-0 shrink",
            "lg:mr-[100px] xl:mr-[152px]",
            "flex flex-col items-center lg:block",
            "mb-[40px] lg:mb-0"
          )}
        >
          <h2 className="h4 md:h2 text-primary_100">享樂酒店</h2>
          <h2 className="title md:h5 text-primary_100 mb-[20px] lg:mb-[40px]">
            Enjoyment Luxury Hotel
          </h2>
          <div
            className="w-full h-[2px] hidden lg:block"
            style={{
              background: "linear-gradient(90deg, #BE9C7C, #FFFFFF)",
            }}
          />
          <div
            className="w-[2px] h-[83px] lg:hidden"
            style={{
              background: "linear-gradient(#BE9C7C, #FFFFFF)",
            }}
          />
        </div>
        <div
          className={clsx(
            "relative",
            "min-w-[291px] max-w-[] w-full lg:w-[972px]",
            "grow-0 shrink"
          )}
        >
          <div
            className={clsx(
              "absolute right-0",
              "h-full",
              "border-t border-r border-[#F5F7F9] rounded-[80px]"
            )}
            style={{
              width: "calc(100% - 48px)",
              background: "linear-gradient(#FFFFFF00, #FFFFFF4D)",
            }}
          />
          <div
            className={clsx(
              "max-w-[772px] relative",
              "pr-[20px] md:pr-[48px] py-[60px] lg:py-[96px]"
            )}
          >
            <h2
              className={clsx(
                "display_h text-neutral_0 mb-[24px] text-[48px]",
                "sm:text-[70px] md:text-[90px] lg:text-[65px] xl:text-[85px] 2xl:text-[100px]"
              )}
            >
              高雄
              <br />
              豪華住宿之選
            </h2>
            <p
              className={clsx(
                "text-[16px] font-[600] text-neutral_0 tracking-[5%]",
                "mb-[40px] lg:mb-[60px]",
                "md:text-[24px]  xl:text-[22px] 2xl:text-[32px]"
              )}
            >
              我們致力於為您提供無與倫比的奢華體驗與優質服務
            </p>
            <button
              type="button"
              className={clsx(
                "w-full h-[64px] lg:h-[116px]",
                "flex justify-end items-center",
                "bg-neutral_0",
                "title md:text-[24px] font-bold",
                "p-[40px] rounded-[8px]",
                "hover:bg-primary_100 group"
              )}
            >
              <p className="mr-[16px] group-hover:text-neutral_0">立即訂房</p>
              <div className="w-[80px] md:w-[150px] h-[1px] bg-neutral_100 group-hover:bg-neutral_0"></div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerContent;
