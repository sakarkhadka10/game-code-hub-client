import { useContext } from "react";
import { PROJECT_NAME } from "../../config.js";
import { Link, useNavigate } from "react-router-dom";
import productContext from "../../context/Product/ProductContext.jsx";
import { AuthContext } from "../../context/Auth/AuthContext.jsx"; // Use named import
import LoginProfile from "../Elements/LoginProfile.jsx";

const DesktopNav = () => {
  const navigate = useNavigate();
  const productCtx = useContext(productContext);
  const authCtx = useContext(AuthContext); // Capitalized AuthContext
  const {
    state: { cart },
  } = productCtx;

  const { user, isLoggedIn, logout } = authCtx;

  const NavItems = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Shop", link: "/shop" },
    { id: 3, name: "Flash Sale", link: "#" },
    { id: 4, name: "Privacy Policy", link: "#" },
    { id: 5, name: "Contact Us", link: "#" },
  ];

  const handleLogout = () => {
    logout(); // Use context logout
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center px-5 py-3">
      <div className="text-2xl font-extrabold">
        <Link to="/">
          <h1>{PROJECT_NAME}</h1>
        </Link>
      </div>
      <div className="flex justify-between items-center gap-10">
        <ul className="flex items-center gap-6 font-semibold text-md">
          {NavItems.map((item) => (
            <li key={item.id}>
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
          <Link to="/cart">
            <button className="flex items-center gap-1.5 cursor-pointer font-bold">
              <img src="/cart.png" alt="cart" className="w-6" />({cart.length})
            </button>
          </Link>
          {isLoggedIn ? (
            <LoginProfile handleLogout={handleLogout} user={user} />
          ) : (
            <Link to="/login">
              <button className="bg-amber-100 px-4 py-2 rounded-lg cursor-pointer font-bold">
                <span>Account</span>
              </button>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DesktopNav;
