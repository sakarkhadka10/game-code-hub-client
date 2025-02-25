import { mobileNavItems } from "../../API/NavItems";
import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <div className="bg-amber-800 fixed bottom-0 w-full px-6 text-white py-3">
      <div className="flex justify-between items-center">
        {mobileNavItems.map(({ _id, name, link, icon: Icon }) => {
          return (
            <Link key={_id} to={link}>
              <div className="flex flex-col gap-1 items-center">
                <Icon className="text-2xl" />
                <span className="text-[10px]">{name}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNav;
