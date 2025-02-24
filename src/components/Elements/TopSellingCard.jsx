import PropTypes from "prop-types";

const TopSellingCard = ({ image, title, category, price }) => {
  return (
    <div className="relative w-full h-full rounded-sm shadow-[3px_2px_10px_black] transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-lg hover:shadow-[4px_4px_0px_black] flex flex-col">
      <img src={image} alt={title} className="w-full h-[130px] object-cover" />
      <div className="flex flex-col flex-grow justify-between text-center py-2 px-0.5">
        <h3 className="text-md font-semibold  flex-1">{title}</h3>
        <div className="mt-auto">
          <p className="text-gray-500 text-xs italic">{category}</p>
          <span className="text-lg font-bold">${price}</span>
        </div>
      </div>
    </div>
  );
};

TopSellingCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default TopSellingCard;
