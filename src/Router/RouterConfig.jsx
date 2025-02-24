import { Route, Routes } from "react-router-dom";
import ProductState from "../context/Product/ProductState";
import HomePage from "../components/Home/HomePage";
import Shop from "../components/Home/Shop";
import CartPage from "../components/Home/CartPage";

const RouterConfig = () => {
  return (
    <>
      <ProductState>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<CartPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </ProductState>
    </>
  );
};

export default RouterConfig;
