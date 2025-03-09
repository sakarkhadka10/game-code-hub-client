import { Link } from "react-router-dom";
import AnimatedButton from "../Elements/AnimatedButton";
import Shop from "../Page/Shop";
import { useContext, useEffect } from "react";
import productContext from "../../context/Product/ProductContext";

const FeatureProduct = () => {
  const context = useContext(productContext);
  const { product, fetchProducts } = context;

  useEffect(() => {
    fetchProducts();
  }, []);

  const featuredProduct = product.filter(
    (product) => product.featured === true
  );
  const limitedProduct = featuredProduct.slice(0, 8);
  return (
    <div className="mt-8 ">
      <div className="flex justify-between items-center px-24  font-product-title -mb-6  ">
        <h1 className="text-2xl font-extrabold">Feature Products</h1>

        <Link to="/shop">
          <AnimatedButton name="View More" active />
        </Link>
      </div>
      <Shop items={limitedProduct} />
    </div>
  );
};

export default FeatureProduct;
