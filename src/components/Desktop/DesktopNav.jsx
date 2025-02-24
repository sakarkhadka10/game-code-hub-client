import { useContext } from "react";
import { PROJECT_NAME } from "../../config.js";
import { Link } from "react-router-dom";
import productContext from "../../context/Product/ProductContext.jsx";

const DesktopNav = () => {
  const context = useContext(productContext);
  const {
    state: { cart },
  } = context;

  const NavItems = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Shop", link: "/shop" },
    { id: 3, name: "Flash Sale", link: "#" },
    { id: 4, name: "Privacy Policy", link: "#" },
    { id: 5, name: "Contact Us", link: "#" },
  ];
  return (
    <>
      <div className="flex justify-between items-center px-5 py-3">
        <div className="text-2xl font-extrabold">
          <h1>{PROJECT_NAME}</h1>
        </div>
        <div className="flex justify-between items-center gap-10">
          <ul className="flex items-center gap-6 font-semibold text-md">
            {NavItems.map((items) => {
              return (
                <li key={items.id}>
                  <Link to={items.link}>{items.name}</Link>
                </li>
              );
            })}
            {/* <button className=" flex items-center gap-1.5 cursor-pointer font-bold">
              <img
                src="/notifications.png"
                alt="notifications"
                className="w-6"
              />
              (15$)
            </button> */}
            <Link to="/cart">
              <button className=" flex items-center gap-1.5 cursor-pointer font-bold">
                <img src="/cart.png" alt="cart" className="w-6" />({cart.length}
                )
              </button>
            </Link>
            <Link to="/login">
              <button className="bg-amber-100 px-4 py-2 rounded-lg cursor-pointer font-bold">
                <span>Account</span>
              </button>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DesktopNav;
