import pc_news1 from "@/assets/images/desktop/news1.png";
import pc_news2 from "@/assets/images/desktop/news2.png";
import pc_news3 from "@/assets/images/desktop/news3.png";
import m_news1 from "@/assets/images/mobile/news1.png";
import m_news2 from "@/assets/images/mobile/news2.png";
import m_news3 from "@/assets/images/mobile/news3.png";
import clsx from "clsx";

const News = () => {
  const news = [
    {
      id: 0,
      img: {
        desktop: pc_news1,
        mobile: m_news1,
      },
      title: "秋季旅遊，豪華享受方案",
      content:
        "秋天就是要來場豪華的旅遊！我們為您準備了一系列的秋季特別方案，包括舒適的住宿、美食饗宴，以及精彩的活動。不論您是想來一趟浪漫之旅，還是想和家人共度美好時光，都能在這裡找到最適合的方案。",
    },
    {
      id: 1,
      img: {
        desktop: pc_news2,
        mobile: m_news2,
      },
      title: "輕鬆住房專案",
      content:
        "我們知道，有時候您只是需要一個舒適的地方放鬆心情。因此，我們推出了「輕鬆住房專案」，讓您無壓力地享受住宿。不管是短期的休息，還是長期的住宿，我們都會以最貼心的服務，讓您感到賓至如歸。",
    },
    {
      id: 2,
      img: {
        desktop: pc_news3,
        mobile: m_news3,
      },
      title: "耶誕快樂，住房送禮",
      content:
        "聖誕節來臨，我們為您準備了特別的禮物！在聖誕期間訂房，不僅有特別優惠，還會送上我們精心準備的聖誕禮物。讓我們一起慶祝這個溫馨的節日吧！",
    },
  ];
  return (
    <>
      <div
        className={clsx(
          "flex flex-col md:flex-row justify-center",
          "bg-primary_10",
          "px-[12px] lg:px-[80px] py-[80px] md:py-[120px]",
          "gap-[40px] md:gap-[80px]"
        )}
      >
        <div className="w-[140px] flex-none">
          <h2 className="h1 text-primary_100 mb-[40px]">
            最新
            <br />
            消息
          </h2>
          <div
            className="w-full h-[2px]"
            style={{
              background: "linear-gradient(90deg, #BE9C7C, #FFFFFF)",
            }}
          />
        </div>
        <ul className="relative flex flex-col gap-[40px]">
          {news.map((item) => {
            return (
              <li
                className="flex flex-col lg:flex-row items-center gap-[24px] flex-1"
                key={item.id}
              >
                <picture>
                  <source media="(max-width: 768px)" srcSet={item.img.mobile} />
                  <img
                    src={item.img.desktop}
                    className="w-full md:w-[474px] object-cover rounded-[8px]"
                  />
                </picture>
                <div className="w-full max-w-[474px] lg:max-w-[400px] xl:max-w-[578px]">
                  <h3 className="h4 mb-[12px] lg:h3 lg:mb-[24px]">
                    {item.title}
                  </h3>
                  <p className="text-[14px] lg:text-[16px] text-neutral_80">
                    {item.content}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default News;
