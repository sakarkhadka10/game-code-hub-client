import PropTypes from "prop-types";
import {
  FiDollarSign,
  FiHome,
  FiLink,
  FiPaperclip,
  FiUsers,
} from "react-icons/fi";

const RouteSelect = ({ onRouteChange, activeRoute }) => {
  const routes = [
    { Icon: FiHome, title: "Dashboard" },
    { Icon: FiUsers, title: "AddProducts" },
    { Icon: FiPaperclip, title: "Invoices" },
    { Icon: FiLink, title: "Integrations" },
    { Icon: FiDollarSign, title: "Finance" },
  ];

  return (
    <div className="space-y-1">
      {routes.map(({ Icon, title }) => (
        <Route
          key={title}
          Icon={Icon}
          title={title}
          selected={activeRoute === title}
          onClick={() => onRouteChange(title)}
        />
      ))}
    </div>
  );
};

const Route = ({ selected, Icon, title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] ${
        selected
          ? "bg-white text-stone-950 shadow"
          : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"
      }`}
    >
      <Icon className={selected ? "text-violet-500" : ""} />
      <span>{title}</span>
    </button>
  );
};

Route.propTypes = {
  selected: PropTypes.bool.isRequired,
  Icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

RouteSelect.propTypes = {
  onRouteChange: PropTypes.func.isRequired,
  activeRoute: PropTypes.string.isRequired,
};

export default RouteSelect;
