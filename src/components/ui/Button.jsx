import PropTypes from "prop-types";
const Button = ({ title, icon: Icon }) => {
  return (
    <div>
      <button className="flex items-center justify-between gap-3 px-6 py-2 font-medium bg-[#2d2824] rounded-md text-white w-fit transition-all shadow-[3px_3px_0px_white] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
        <Icon /> {title}
      </button>
    </div>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element,
};

export default Button;
