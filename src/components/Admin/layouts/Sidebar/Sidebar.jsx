import { Search } from "./Search";
import RouteSelect from "./RouteSelect";

const Sidebar = () => {
  return (
    <div>
      <div className="overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)] ">
        <Search />
        <RouteSelect />
      </div>
    </div>
  );
};

export default Sidebar;
