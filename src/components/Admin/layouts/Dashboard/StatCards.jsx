import PropTypes from "prop-types";

export const StatCards = () => {
  return (
    <>
      <Card title="Items" value="5" icons="/Icons/items.webp" bgcol="#656565" />
      <Card
        title="Orders"
        value="10"
        icons="/Icons/cart.webp"
        bgcol="#ffda45"
      />
      <Card
        title="Earnings"
        value="$500"
        icons="/Icons/dollar.webp"
        bgcol="#656565"
      />
      <Card title="Users" value={5} icons="/Icons/users.webp" bgcol="#ffda45" />
      <Card
        title="Comments"
        value="18"
        icons="/Icons/comments.webp"
        bgcol="#656565"
      />
      <Card
        title="Subscribers"
        value="110"
        icons="/Icons/subscribers.webp"
        bgcol="#ffda45"
      />
      <Card
        title="Categories"
        value="2"
        icons="/Icons/tag.webp"
        bgcol="#656565"
      />
      <Card title="Post" value="17" icons="/Icons/pages.webp" bgcol="#ffda45" />
    </>
  );
};

const Card = ({ title, value, icons, bgcol }) => {
  return (
    <div className="w-60 rounded-xl bg-white border shadow-2xl h-auto">
      <div
        style={{ backgroundColor: bgcol }}
        className={`py-2 text-center w-full rounded-t-xl ${
          bgcol === "#ffda45" ? "text-black" : "text-white"
        }`}
      >
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
      <div className="grid grid-cols-3 items-center justify-between px-4 py-4">
        <div>
          <img src={icons} alt={title} className="w-14" />
        </div>
        <div>
          <hr className="w-[88px]" style={{ transform: "rotate(90deg)" }} />
        </div>
        <div className="text-2xl">
          <h1>{value}</h1>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icons: PropTypes.string.isRequired,
  bgcol: PropTypes.string.isRequired,
};
