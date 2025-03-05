const AddProducts = () => {
  return (
    <div className="grid gap-4 p-4  w-full">
      <div className="bg-white rounded-lg pb-4 pt-4 shadow">
        <h2 className="text-xl font-bold px-4 pb-4">Add Products</h2>
        {/* Add your AddProducts content here */}

        <div>
          <form className="px-11 py-4">
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block mb-2 text-lg font-medium text-gray-900 "
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300  text-md rounded-xl  block w-full p-2 "
                placeholder="..."
                required
              />
            </div>
            <div className="mb-5 block">
              <label
                htmlFor="short description"
                className=" text-lg font-medium text-gray-900"
              >
                Short Description:
              </label>
              <textarea
                type="text"
                id="description"
                name="description"
                maxLength="100"
                required
                className="bg-gray-50 border border-gray-300  text-md rounded-xl  block w-full p-2 "
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block mb-2 text-lg font-medium text-gray-900"
              >
                Category
              </label>
              <select
                id="name"
                className="bg-gray-50 border border-gray-300 text-md rounded-xl block w-full px-4 py-2 "
                required
              >
                <option value="" disabled selected hidden>
                  ...
                </option>
                <option value="category1">Game Template</option>
                <option value="category2">Web Template</option>
              </select>
            </div>
            <div className="mb-5">
              <label
                htmlFor="price"
                className="block mb-2 text-lg font-medium text-gray-900 "
              >
                Price
              </label>
              <input
                type="number"
                id="price"
                className="bg-gray-50 border border-gray-300  text-md rounded-xl  block w-full p-2 "
                required
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
