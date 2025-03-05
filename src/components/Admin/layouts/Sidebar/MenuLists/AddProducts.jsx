import { useState } from "react";
import axios from "axios";

const AddProducts = () => {
  const [product, setProduct] = useState({
    title: "",
    shortDescription: "",
    category: "",
    description: "",
    tags: "",
    price: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Prepare JSON data instead of FormData
    const productData = {
      title: product.title,
      shortDescription: product.shortDescription,
      category: product.category,
      description: product.description,
      tags: product.tags, // Keep as string, backend will split it
      price: product.price,
    };

    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Please login first");

      const response = await axios.post(
        "http://localhost:5000/api/product/addproduct",
        productData,
        {
          headers: {
            "auth-token": token,
            "Content-Type": "application/json", // Changed to JSON
          },
        }
      );

      console.log("Product added:", response.data);
      setProduct({
        title: "",
        shortDescription: "",
        category: "",
        description: "",
        tags: "",
        price: "",
      });
    } catch (error) {
      const errorMsg =
        error.response?.data?.errors?.[0]?.msg ||
        error.response?.data?.error ||
        error.message;
      setError(errorMsg);
      console.error("Error:", error.response?.data || error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="grid gap-4 p-4 w-full">
      <div className="bg-white rounded-lg pb-4 pt-4 shadow">
        <h2 className="text-xl font-bold px-4 pb-4">Add Products</h2>
      </div>
      <div className="bg-white rounded-lg pb-4 pt-4 shadow">
        {error && <div className="px-11 py-2 text-red-600">Error: {error}</div>}
        <form className="px-11 py-4" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="title"
              className="block mb-2 text-lg font-medium text-gray-900"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={product.title}
              onChange={handleChange}
              minLength="4"
              className="bg-gray-50 border border-gray-300 text-md rounded-xl block w-full p-2"
              placeholder="Enter product title (min 4 chars)"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="shortDescription"
              className="block mb-2 text-lg font-medium text-gray-900"
            >
              Short Description
            </label>
            <textarea
              id="shortDescription"
              name="shortDescription"
              value={product.shortDescription}
              onChange={handleChange}
              minLength="6"
              maxLength="100"
              className="bg-gray-50 border border-gray-300 text-md rounded-xl block w-full p-2"
              placeholder="Enter short description (min 6 chars)"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="category"
              className="block mb-2 text-lg font-medium text-gray-900"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              value={product.category}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-md rounded-xl block w-full px-4 py-2"
              required
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="game-template">Game Template</option>
              <option value="web-template">Web Template</option>
            </select>
          </div>
          <div className="mb-5">
            <label
              htmlFor="description"
              className="block mb-2 text-lg font-medium text-gray-900"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={product.description}
              onChange={handleChange}
              minLength="6"
              maxLength="1000"
              className="bg-gray-50 border border-gray-300 text-md rounded-xl block w-full p-2 min-h-[100px]"
              placeholder="Enter description (min 6 chars)"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="tags"
              className="block mb-2 text-lg font-medium text-gray-900"
            >
              Tags
            </label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={product.tags}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-md rounded-xl block w-full p-2"
              placeholder="Enter tags separated by commas"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="price"
              className="block mb-2 text-lg font-medium text-gray-900"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={product.price}
              onChange={handleChange}
              min="0"
              step="0.01"
              className="bg-gray-50 border border-gray-300 text-md rounded-xl block w-full p-2"
              placeholder="Enter price"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Adding..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
