import { Route, Routes } from "react-router-dom";
import HomePage from "../components/Home/HomePage";
import Shop from "../components/Home/Shop";
import CartPage from "../components/Home/CartPage";
import RegistrationForm from "../components/Home/RegistrationForm ";
import LoginForm from "../components/Home/LoginForm";

const RouterConfig = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        {/* Add more routes as needed */}
      </Routes>
    </>
  );
};

export default RouterConfig;
