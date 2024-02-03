import About from "@/components/Home/About";
import BannerContent from "@/components/Home/BannerContent";
import Food from "@/components/Home/Food";
import News from "@/components/Home/News";
import Room from "@/components/Home/Room";
import Transportation from "@/components/Home/Transportation";
import BannerHeader from "@/components/Layout/BannerHeader";
import Footer from "@/components/Layout/Footer";

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
        <Transportation />
        <Footer />
      </div>
    </>
  );
};

export default Home;
