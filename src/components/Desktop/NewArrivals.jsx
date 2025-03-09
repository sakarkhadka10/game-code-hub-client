import { Link } from "react-router-dom";
import AnimatedButton from "../Elements/AnimatedButton";
import Shop from "../Page/Shop";

const NewArrivals = () => {
  return (
    <div className="mt-8 ">
      <div className="flex justify-between items-center px-24  font-product-title -mb-6  ">
        <h1 className="text-2xl font-extrabold">New Arrivals</h1>

        <Link to="/shop">
          <AnimatedButton name="View More" active />
        </Link>
      </div>
      <Shop />
    </div>
  );
};

export default NewArrivals;
