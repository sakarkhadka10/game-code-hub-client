import {
  FiDollarSign,
  FiHome,
  FiLink,
  FiPaperclip,
  FiUsers,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const RouteSelect = () => {
  const routes = [
    { Icon: FiHome, title: "Dashboard", link: "/admin" },
    { Icon: FiUsers, title: "Products", link: "/admin/products" },
    { Icon: FiPaperclip, title: "Users", link: "/admin/all-users" },
    { Icon: FiLink, title: "Integrations", link: "/admin/integrations" },
    { Icon: FiDollarSign, title: "Finance", link: "/admin/finance" },
  ];

  return (
    <div className="flex flex-col gap-8">
      {routes.map((route, index) => (
        <Link to={route.link} key={index} className="flex items-center gap-4">
          <route.Icon className="h-6 w-6 text-gray-600" />
          <span className="text-sm font-semibold text-gray-600">
            {route.title}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default RouteSelect;
