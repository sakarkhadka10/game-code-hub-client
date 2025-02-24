import TopSellingCard from "../Elements/TopSellingCard";
import { Recomended, topSellingProducts } from "../../API/Products";

const DesktopTopSelling = () => {
  return (
    <div className="py-11  bg-[url(/top-selling-bg.png)] bg-center bg-cover bg-no-repeat  min-h-screen relative">
      <div className="flex px-8 flex-wrap justify-end gap-4 items-stretch">
        {Recomended.map((product, index) => (
          <div key={index} className="w-[200px] h-auto flex">
            <TopSellingCard
              image={product.image}
              title={product.title}
              category={product.category}
              price={product.price}
            />
          </div>
        ))}
      </div>
      <br />
      <hr className="border-0 border-t-8 border-dotted border-amber-400 w-full my-4" />

      <br />
      <div className="flex px-8 flex-wrap justify-end gap-4 items-stretch">
        {topSellingProducts.map((product, index) => (
          <div key={index} className="w-[200px] h-auto flex">
            <TopSellingCard
              image={product.image}
              title={product.title}
              category={product.category}
              price={product.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesktopTopSelling;
