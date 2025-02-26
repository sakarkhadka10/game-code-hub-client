import { Route, Routes } from "react-router-dom";
import HomePage from "../components/Page/HomePage";
import Shop from "../components/Page/Shop";
import CartPage from "../components/Page/CartPage";
import RegistrationForm from "../components/Page/auth/RegistrationForm";
import LoginForm from "../components/Page/auth/LoginForm";
import UsersProfile from "../components/Users/UsersProfile";
import UsersCollection from "../components/Users/UsersCollection";
import ProtectedRoute from "./ProtectedRoute";
import AdminLayout from "../components/Admin/AdminLayout";

const RouterConfig = () => {
  //const isLoggedIn = localStorage.getItem("loggedIn"); // check if logged in already
  //const userType = localStorage.getItem("userType"); // check if the logged in user is a User or Admin
  return (
    <>
      <Routes>
        {/* Unauthorized Routes */}
        {/* {!isLoggedIn && (
          <>
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/" element={<LoginForm />} />
          </>
        )} */}
        {/* Protected Route */}
        <Route element={ProtectedRoute}>
          {/* Basic Login & Register */}

          {/* This is A Users Router */}
        </Route>

        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<CartPage />} />

        <Route path="/usersprofile" element={<UsersProfile />} />
        <Route path="/userscollection" element={<UsersCollection />} />

        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />

        {/* This is a Admin Router */}
        <Route path="/admin" element={<AdminLayout />} />

        {/* Add more routes as needed */}
      </Routes>
    </>
  );
};

export default RouterConfig;
