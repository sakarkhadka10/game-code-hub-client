import PropTypes from "prop-types";

const AnimatedButton = (props) => {
  return (
    <div>
      {props.active !== true ? (
        <button className="rounded-sm border-2 border-solid border-black bg-transparent px-6 py-2 font-bold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-lg hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none cursor-pointer">
          {props.name}
        </button>
      ) : (
        <button className="rounded-sm border-2 border-solid border-black bg-black px-6 py-2 font-bold uppercase text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-lg  shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none cursor-pointer">
          {props.name}
        </button>
      )}
    </div>
  );
};

AnimatedButton.propTypes = {
  active: PropTypes.bool,
  name: PropTypes.string.isRequired,
};

export default AnimatedButton;
