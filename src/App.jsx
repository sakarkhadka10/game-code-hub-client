import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderNotification from "./components/Elements/HeaderNotification";
import { NOTIFICATION_DESKTOP } from "./config";
import ProductState from "./context/Product/ProductState";
import DesktopNav from "./components/Desktop/DesktopNav";
import MobileNav from "./components/Mobile/MobileNav";
import AuthProvider from "./context/Auth/AuthProvider";
import HomePage from "./components/Page/HomePage";
import Shop from "./components/Page/Shop";
import CartPage from "./components/Page/CartPage";
import RegistrationForm from "./components/Page/auth/RegistrationForm";
import LoginForm from "./components/Page/auth/LoginForm";
import UsersProfile from "./components/Users/UsersProfile";
import UsersCollection from "./components/Users/UsersCollection";
import AdminLayout from "./components/Admin/AdminLayout";
import Dashboard from "./components/Admin/layouts/Dashboard/Dashboard";
import AddProducts from "./components/Admin/layouts/Sidebar/MenuLists/AddProducts";
import Products from "./components/Admin/layouts/Sidebar/MenuLists/Products";
import AllUsers from "./components/Admin/layouts/Sidebar/MenuLists/AllUsers";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <ProductState>
            <div className="hidden md:block">
              {NOTIFICATION_DESKTOP.isActive && <HeaderNotification />}
            </div>
            <div className="hidden md:block">
              <DesktopNav />
            </div>
            <div className="md:hidden">
              <MobileNav />
            </div>

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
                <Route path="products" element={<Products />} />
                <Route path="all-users" element={<AllUsers />} />
              </Route>
            </Routes>
          </ProductState>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
