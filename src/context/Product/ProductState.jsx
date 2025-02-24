import PropTypes from "prop-types";
import { useReducer, useState } from "react";
import { allProduct } from "../../API/AllProduct";
import productContext from "./ProductContext";
import { cartReducer } from "./ProductReducer";

const ProductState = (props) => {
  const [product, setProduct] = useState(allProduct);
  const [state, dispatch] = useReducer(cartReducer, {
    products: product,
    cart: [],
  });

  // Example: Function to update products
  const updateProducts = (newProducts) => {
    setProduct(newProducts);
  };

  return (
    <productContext.Provider
      value={{ state, dispatch, product, updateProducts }}
    >
      {props.children}
    </productContext.Provider>
  );
};

ProductState.propTypes = {
  children: PropTypes.node,
};

export default ProductState;
