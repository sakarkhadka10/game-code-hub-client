import { useContext } from "react";
import productContext from "../../context/Product/ProductContext";
import { FaShoppingCart } from "react-icons/fa";

const CartButton = () => {
  const context = useContext(productContext);
  const {
    state: { cart },
  } = context;

  return (
    <div className="relative">
      <div className="flex items-center p-2">
        <FaShoppingCart className="w-6 h-6" />
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
            {cart.length}
          </span>
        )}
      </div>
    </div>
  );
};

export default CartButton;
