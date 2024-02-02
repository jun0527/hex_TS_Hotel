import About from "@/components/Home/About";
import BannerContent from "@/components/Home/BannerContent";
import Food from "@/components/Home/Food";
import News from "@/components/Home/News";
import Room from "@/components/Home/Room";
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
        <Room />
        <Food />
      </div>
    </>
  );
};

export default Home;
