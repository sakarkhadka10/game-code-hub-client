import PropTypes from "prop-types";

const ProductCard = ({
  image,
  title,
  category,
  price,
  product,
  cart,
  dispatch,
}) => {
  const isInCart = cart.some((item) => item._id === product._id);
  return (
    <div className="w-full h-full rounded-xl shadow-[1px_1px_5px_black] flex flex-col">
      <img
        src={image}
        alt={title}
        className="w-full rounded-t-xl object-cover"
      />
      <div className="flex flex-col flex-grow justify-between text-center py-2 px-0.5">
        <h3 className="text-md font-semibold  flex-1 pt-2">{title}</h3>
        <div className="mt-auto pt-6">
          <p className="text-gray-500 text-xs italic pb-2">{category}</p>
          <span className="text-xl font-bold">${price}</span>
        </div>
      </div>

      {/* Toggle Add/Remove from Cart */}
      <button
        className={`w-full ${
          isInCart ? "bg-red-600" : "bg-gray-700"
        } text-white py-2 font-semibold rounded-b-lg cursor-pointer`}
        onClick={() =>
          dispatch({
            type: isInCart ? "REMOVE_FROM_CART" : "ADD_TO_CART",
            payload: product,
          })
        }
      >
        {isInCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  product: PropTypes.object.isRequired,
  cart: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};
export default ProductCard;
