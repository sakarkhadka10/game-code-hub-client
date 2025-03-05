import ProductToolBar from "./MenuComponents/ProductToolBar";

const Products = () => {
  return (
    <div className="grid gap-4 p-4  w-full">
      <div className="bg-white rounded-lg py-1 shadow ">
        <h2 className="text-xl font-bold px-4 py-2">Products</h2>
      </div>

      {/* Add your AddProducts content here */}
      <div className="bg-white rounded-lg pb-4 pt-4 shadow ">
        <ProductToolBar />
      </div>

      <div className="bg-white rounded-lg pb-4 pt-4 shadow"></div>
    </div>
  );
};

export default Products;
