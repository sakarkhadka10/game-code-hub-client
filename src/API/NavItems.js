import { FaHouse, FaBarsStaggered } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import CartButton from "../components/Elements/CartButton";

export const navItems = [
  { _id: 1, name: "Home", link: "/" },
  { _id: 2, name: "Products", link: "/products" },
  { _id: 3, name: "Account", link: "/desktop-account" },
];

export const mobileNavItems = [
  { _id: 1, icon: FaHouse, name: "Home", link: "/" },
  { _id: 2, icon: FaBarsStaggered, name: "Products", link: "/shop" },
  { _id: 3, icon: CartButton, name: "Carts", link: "/cart" },
  { _id: 4, icon: FaUser, name: "Account", link: "/mobile-account" },
];
