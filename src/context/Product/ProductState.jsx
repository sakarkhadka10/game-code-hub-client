import PropTypes from "prop-types";
import { useReducer, useState } from "react";
import productContext from "./ProductContext";
import { cartReducer } from "./ProductReducer";

const ProductState = (props) => {
  const getUserApi = `${
    import.meta.env.VITE_SECRET_KEY_URI
  }/product/getallproduct`;
  const [product, setProduct] = useState([]);
  const [state, dispatch] = useReducer(cartReducer, {
    products: product,
    cart: [],
  });

  // Fetching Products From Database
  const fetchProducts = async () => {
    try {
      const response = await fetch(
        getUserApi ||
          "https://game-code-hub-server.vercel.app/api/product/getallproduct",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let data = await response.json();
      console.log(data);
      setProduct(data);
    } catch (error) {
      console.error("internal server error", error);
    }
  };

  // Example: Function to update products
  const updateProducts = (newProducts) => {
    setProduct(newProducts);
  };

  return (
    <productContext.Provider
      value={{ state, dispatch, product, updateProducts, fetchProducts }}
    >
      {props.children}
    </productContext.Provider>
  );
};

ProductState.propTypes = {
  children: PropTypes.node,
};

export default ProductState;
