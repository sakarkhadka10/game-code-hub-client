// import { AccountToggle } from "./AccountToggle";
import { Search } from "./Search"; // Missing import
import RouteSelect from "./RouteSelect"; // Missing import

const Sidebar = () => {
  return (
    <div>
      <div className="overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]">
        {/* <AccountToggle /> Was incorrectly named AccountToggle */}
        <Search />
        <RouteSelect />
        {/* TODO: Plane Toggle */}
      </div>
    </div>
  );
};

export default Sidebar;
