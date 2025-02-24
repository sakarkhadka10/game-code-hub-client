import { useContext } from "react";
import productContext from "../../context/Product/ProductContext";
import ProductCard from "../Elements/ProductCard";

const Shop = () => {
  // TODO: Implement Shop page with filtering, sorting, and pagination
  const context = useContext(productContext);
  const {
    state: { cart },
    dispatch,
    product,
  } = context;
  return (
    <>
      <div className="hidden md:block">{/* <DesktopNav /> */}</div>
      <div className="py-11 min-h-screen">
        <div className="grid px-20 grid-cols-4 justify-items-center gap-7 items-stretch">
          {product.map((product, index) => (
            <div key={index} className="w-[270px] h-auto flex flex-col">
              <ProductCard
                image={product.image}
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
