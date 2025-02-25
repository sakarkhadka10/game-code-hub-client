import { Link } from "react-router-dom";
import Shop from "../Home/Shop";
import { FaArrowLeft } from "react-icons/fa6";

const MobileProduct = () => {
  return (
    <div>
      <div className="md:hidden">
        <div className="bg-white px-5 py-3 shadow-sm">
          <Link to="/" className="flex items-center gap-3">
            <FaArrowLeft />
            <h1>My Cart</h1>
          </Link>
        </div>
      </div>
      <Shop />
    </div>
  );
};

export default MobileProduct;
