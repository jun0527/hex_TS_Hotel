import About from "@/components/Home/About";
import BannerContent from "@/components/Home/BannerContent";
import News from "@/components/Home/News";
import BannerHeader from "@/components/Layout/BannerHeader";

const Home = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <BannerHeader>
          <BannerContent />
        </BannerHeader>
        <News />
        <About />
      </div>
    </>
  );
};

export default Home;
