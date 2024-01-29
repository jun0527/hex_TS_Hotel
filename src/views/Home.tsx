import BannerContent from "@/components/Home/BannerContent";
import BannerHeader from "@/components/Layout/BannerHeader";
const Home = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <BannerHeader>
          <BannerContent />
        </BannerHeader>
      </div>
    </>
  );
};

export default Home;
