import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div className="flex items-center border border-red-400 rounded-full p-1 ">
      <FaSearch className="text-gray-400 ml-2" size={18} />
      <input
        type="text"
        placeholder="shoes for men"
        className="flex-grow outline-none px-2 text-sm placeholder-gray-400"
      />
      <button className="bg-orange-500 text-white text-sm font-semibold px-4 py-1 rounded-full mr-1">
        Search
      </button>
    </div>
  );
}
