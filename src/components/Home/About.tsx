import pc_about from "@/assets/images/desktop/about.png";
import m_about from "@/assets/images/mobile/about.png";
import clsx from "clsx";

const About = () => {
  return (
    <>
      <div className="relative mt-[80px] mb-[120px] md:mt-[120px] md:mb-[200px]">
        <picture>
          <source media="(max-width: 750px)" srcSet={m_about} />
          <img
            src={pc_about}
            className="w-full h-[594px] md:h-[672px] object-cover"
          />
        </picture>
        <div
          className={clsx(
            "absolute inset-0",
            "flex justify-center",
            "pl-[40px] sm:pl-[80px] md:pl-[150px] lg:pl-[200px] xl:pl-[302px] pr-[20px] md:pr-[50px]"
          )}
        >
          <div
            className={clsx(
              "w-full max-w-[800px] lg:max-w-[1044px] min-h-[594px] md:min-h-[672px]",
              "rounded-[40px] md:rounded-[80px] rounded-br-none md:rounded-br-none",
              "border-b border-l border-neutral_0",
              "mt-[80px] p-[24px] md:p-[80px]"
            )}
            style={{
              background: "linear-gradient(#140F0ACC, #BE9C7CCC)",
            }}
          >
            <div className="flex items-center mb-[40px] lg:mb-[80px]">
              <h2 className="h3 md:h2 lg:h1 text-neutral_0 mr-[40px] flex-none">
                關於
                <br />
                我們
              </h2>
              <div className="w-[165px] h-[2px] bg-neutral_0"></div>
            </div>
            <p className="body_2 sm:body text-neutral_0 mb-[20px] lg:mb-[40px]">
              享樂酒店，位於美麗島高雄的心臟地帶，是這座城市的璀璨瑰寶與傲人地標。
              <br />
              我們的存在，不僅僅是為了提供奢華的住宿體驗，更是為了將高雄的美麗與活力，獻給每一位蒞臨的旅客。
            </p>
            <p className="body_2 sm:body text-neutral_0 mb-[20px] lg:mb-[40px]">
              我們的酒店，擁有時尚典雅的裝潢，每一個細節都充滿著藝術與設計的精緻。
              <br />
              我們的員工，都以熱情的服務與專業的態度，讓每一位客人都能感受到賓至如歸的溫暖。
            </p>
            <p className="body_2 sm:body text-neutral_0 mb-[20px] lg:mb-[40px]">
              在這裡，您可以遙望窗外，欣賞高雄的城市景色，感受這座城市的繁華與活力；您也可以舒適地坐在我們的餐廳，品嚐精緻的佳餚，體驗無與倫比的味覺盛宴。
            </p>
            <p className="body_2 sm:body text-neutral_0">
              享樂酒店，不僅是您在高雄的住宿之選，更是您感受高雄魅力的最佳舞台。我們期待著您的蒞臨，讓我們共同編織一段難忘的高雄故事。
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
