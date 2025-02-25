import Shop from "../Home/Shop";
import SearchBar from "./MobileComponents/SearchBar";

const MobileHome = () => {
  return (
    <>
      
      <div className=" bg-[#f0f1f6] h-screen ">
        <div className="bg-white px-5 py-3 shadow-sm ">
          <SearchBar className="w-full fixed to-0 " />
        </div>
        <div className="px-5 py-4">
          {/* <MobileProduct /> */}
          <Shop />
        </div>
      </div>
    </>
  );
};

export default MobileHome;
