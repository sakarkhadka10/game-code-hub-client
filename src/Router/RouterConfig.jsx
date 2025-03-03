import { Route, Routes } from "react-router-dom";
import HomePage from "../components/Page/HomePage";
import Shop from "../components/Page/Shop";
import CartPage from "../components/Page/CartPage";
import RegistrationForm from "../components/Page/auth/RegistrationForm";
import LoginForm from "../components/Page/auth/LoginForm";
import UsersProfile from "../components/Users/UsersProfile";
import UsersCollection from "../components/Users/UsersCollection";
import AdminLayout from "../components/Admin/AdminLayout";
import AddProducts from "../components/Admin/layouts/Sidebar/MenuLists/AddProducts";
import Dashboard from "../components/Admin/layouts/Dashboard/Dashboard";
import AllUsers from "../components/Admin/layouts/Sidebar/MenuLists/AllUsers";

const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/register" element={<RegistrationForm />} />
      <Route path="/login" element={<LoginForm />} />

      <Route path="/usersprofile" element={<UsersProfile />} />
      <Route path="/userscollection" element={<UsersCollection />} />

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="products/add" element={<AddProducts />} />
        <Route path="products" element={<AddProducts />} />
        <Route path="all-users" element={<AllUsers />} />
      </Route>
    </Routes>
  );
};

export default RouterConfig;
