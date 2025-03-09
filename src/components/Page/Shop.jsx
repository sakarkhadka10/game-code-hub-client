import PropTypes from "prop-types";
import { useContext, useEffect } from "react";
import productContext from "../../context/Product/ProductContext";
import ProductCard from "../Elements/ProductCard";

const Shop = ({ items }) => {
  const getUserApi = `${import.meta.env.VITE_SECRET_KEY_ONLY_URI}`;

  // TODO: Implement Shop page with filtering, sorting, and pagination
  const context = useContext(productContext);
  const {
    state: { cart },
    dispatch,
    product,
    fetchProducts,
  } = context;

  useEffect(() => {
    fetchProducts();
  }, []);

  const productToDisplay = items || product;
  return (
    <>
      <div className="py-11 min-h-screen">
        <div className="grid px-20 grid-cols-1 md:grid-cols-4 mb-8 justify-items-center gap-7 items-stretch">
          {productToDisplay.map((product) => (
            <div key={product._id} className="w-[270px] h-auto flex flex-col">
              <ProductCard
                image={`${getUserApi}/uploads/${product.image}`}
                title={product.title}
                category={product.category}
                specialcategory={product.specialcategory}
                price={product.price}
                product={product}
                cart={cart}
                dispatch={dispatch}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

Shop.propTypes = {
  items: PropTypes.array,
};

export default Shop;
