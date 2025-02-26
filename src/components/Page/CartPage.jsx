import { useContext } from "react";
import { Link } from "react-router-dom";
import productContext from "../../context/Product/ProductContext";
import AnimatedButton from "../Elements/AnimatedButton";
import EmptyCart from "../ui/EmptyCart";

const CartPage = () => {
  const context = useContext(productContext);
  const {
    state: { cart },
    dispatch,
  } = context;

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <>
      <div className=" mx-auto px-4">
        {cart.length === 0 ? (
          <div className="text-center">
            <EmptyCart />
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Your Cart is Empty
            </h2>
            <Link to="/shop">
              <AnimatedButton name="Continue Shopping" />
            </Link>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto py-8 ">
            <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item._id}
                  className="flex justify-between items-center py-3 border-b-2 border-solid border-gray-200"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex flex-col gap-1 flex-1 mx-4">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-gray-600">Price: ${item.price}</p>
                  </div>
                  <div>
                    <button
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: item,
                        })
                      }
                      className="text-sm text-red-600 hover:text-red-800 font-medium"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-between items-center border-t-2 pt-4">
              <h3 className="text-xl font-semibold">Total:</h3>
              <p className="text-xl font-bold">${totalPrice}</p>
            </div>
            <div className="mt-6 flex justify-end">
              <Link to="/checkout">
                <AnimatedButton name="Proceed to Checkout" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;
