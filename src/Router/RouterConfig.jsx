import { Route, Routes } from "react-router-dom";
import HomePage from "../components/Home/HomePage";
import Shop from "../components/Home/Shop";
import CartPage from "../components/Home/CartPage";
import RegistrationForm from "../components/Home/RegistrationForm";
import LoginForm from "../components/Home/LoginForm";
import Admin from "../components/Admin/Admin";
import AdminLogin from "../components/Admin/AdminComponents/AdminLogin";

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

        {/* This is a Admin Router */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>
    </>
  );
};

export default RouterConfig;
