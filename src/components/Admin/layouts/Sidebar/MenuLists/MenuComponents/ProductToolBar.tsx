import React from "react";
import { Link } from "react-router-dom";

const ProductToolBar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200 rounded-t">
      <div className="flex space-x-2">
        <button className="px-4 py-2 text-gray-600 bg-gray-100 rounded hover:bg-gray-200">
          Delete
        </button>

        <button className="px-4 py-2 text-gray-600 bg-gray-100 rounded hover:bg-gray-200">
          Export
        </button>
      </div>

      <div className="flex items-center space-x-2 flex-grow mx-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="px-4 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      <Link to="/admin/products/add">
        <button className="px-4 py-2 text-gray-600 bg-gray-100 rounded hover:bg-gray-200">
          Add
        </button>
      </Link>
    </div>
  );
};

export default ProductToolBar;
