import DesktopHero from "../Desktop/DesktopHero";
import DesktopTopSelling from "../Desktop/DesktopTopSelling";
import Shop from "./Shop";
import AnimatedButton from "../Elements/AnimatedButton";
import { Link } from "react-router-dom";
import MobileHome from "../Mobile/MobileHome";

const HomePage = () => {
  return (
    <div>
      {/*  Desktop View Devices */}
      <div className="hidden md:block">
        <DesktopHero />
        <DesktopTopSelling />
        <div className="mt-8 ">
          <div className="flex justify-between items-center px-24  font-product-title -mb-6  ">
            <h1 className="text-2xl font-extrabold">New Arrivals</h1>

            <Link to="/shop">
              <AnimatedButton name="View More" active />
            </Link>
          </div>
          <Shop />
        </div>
      </div>

      {/*  Mobile View Devices */}
      <div className="md:hidden">
        <MobileHome />
      </div>
    </div>
  );
};

export default HomePage;
