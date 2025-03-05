import { useContext, useEffect } from "react";
import productContext from "../../context/Product/ProductContext";
import ProductCard from "../Elements/ProductCard";

const Shop = () => {
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
  return (
    <>
      <div className="py-11 min-h-screen">
        <div className="grid px-20 grid-cols-1 md:grid-cols-4 mb-8 justify-items-center gap-7 items-stretch">
          {product.map((product) => (
            <div key={product._id} className="w-[270px] h-auto flex flex-col">
              <ProductCard
                image={`${getUserApi}/uploads/${product.image}`}
                title={product.title}
                category={product.category}
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

export default Shop;
