import DesktopHero from "../Desktop/DesktopHero";
import DesktopTopSelling from "../Desktop/DesktopTopSelling";
import MobileHome from "../Mobile/MobileHome";
import Ads from "../ui/Ads";
import Footer from "../Desktop/Footer";
import NewArrivals from "../Desktop/NewArrivals";
import FeatureProduct from "../Desktop/FeatureProduct";

const HomePage = () => {
  return (
    <div>
      {/*  Desktop View Devices */}
      <div className="hidden md:block">
        <DesktopHero />
        <DesktopTopSelling />
      </div>
      <div>
        <NewArrivals />
      </div>
      <div>
        <Ads />
      </div>
      {/* Featured product Comes Here */}
      <div>
        <FeatureProduct />
      </div>
      <div>
        <Footer />
      </div>

      {/*  Mobile View Devices */}
      <div className="md:hidden">
        <MobileHome />
      </div>
    </div>
  );
};

export default HomePage;
