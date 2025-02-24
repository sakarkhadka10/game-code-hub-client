export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [
          ...state.cart,
          { ...action.payload, qty: 1, inStock: action.payload.inStock || 10 },
        ],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c._id !== action.payload._id),
      };

    case "UPDATE_CART_ITEM":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item._id === action.payload._id
            ? { ...item, qty: action.payload.qty }
            : item
        ),
      };

    default:
      return state;
  }
};
