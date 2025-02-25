import  { useContext } from "react";
import { FaArrowLeft, FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import productContext from "../../context/ProductContext";

const MobileCart = () => {
  const context = useContext(productContext);
  const {
    state: { cart },
    dispatch,
  } = context;
  const TotalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <>
      <div>
        <div className="bg-white px-5 py-3 shadow-sm">
          <Link to="/" className="flex items-center gap-3">
            <FaArrowLeft />
            <h1>My Cart</h1>
          </Link>
        </div>

        <div className="mt-4 p-2 pb-20">
          {" "}
          {/* Add bottom padding to prevent overlap */}
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center">
              <img src="/empty-cart.jpg" alt="Empty Cart" />
              <h1 className="font-extrabold text-3xl">Your Cart Is Empty</h1>
              <Link to="/">
                <button className="bg-green-400 text-xl px-6 py-2 rounded-lg mt-7 font-extrabold">
                  Go Home
                </button>
              </Link>
            </div>
          ) : (
            <div className="w-full">
              <div className="bg-white shadow-md rounded-md px-4 py-2">
                {cart.map((item) => (
                  <div key={item._id} className="flex items-center pb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 object-cover object-top rounded-md"
                    />
                    <div className="ml-4 flex-1">
                      <h2 className="text-lg font-semibold">{item.title}</h2>
                      <p className="text-orange-500 font-bold">
                        Rs. {item.price}
                      </p>
                    </div>
                    <div>
                      <select
                        value={item.qty}
                        onChange={(e) =>
                          dispatch({
                            type: "UPDATE_CART_ITEM",
                            payload: { _id: item._id, qty: e.target.value },
                          })
                        }
                      >
                        {[...Array(item.inStock).keys()].map((x) => (
                          <option key={x + 1}>{x + 1}</option>
                        ))}
                      </select>
                    </div>
                    <div className="pl-8 text-lg text-orange-500">
                      <button
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: item,
                          })
                        }
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Fixed Bottom Section */}
        {cart.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 p-3 bg-gray-300 shadow-2xl shadow-amber-600 w-full">
            <div className="flex items-center justify-between font-bold text-lg">
              <span>
                Total: <span className="text-red-800">Rs. {TotalPrice}</span>
              </span>
              <button className="bg-orange-500 text-white px-4 py-1 rounded-md">
                Checkout ({cart.length})
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileCart;
