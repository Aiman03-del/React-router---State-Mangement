import PropTypes from "prop-types";
import Features from "../Feature/Feature";
const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className=" flex flex-col p-6  text-center justify-between collapse bg-gradient-to-r from-red-500 to-orange-500">
      <h2 className="p-4">
        <span className="text-7xl">{price}</span>
        <span className="text-3xl">/mon</span>
      </h2>
      <h4 className="text-3xl p-4">{name}</h4>
      <div className="flex-grow">
        {features.map((feature, index) => (
          <Features key={index} feature={feature}></Features>
        ))}
      </div>
      <button className="mt-5 btn text-2xl text-teal-200 bg-gradient-to-r from-orange-500 to-red-500 hover:bg-gradient-to-l from-red-500 to-orange-500">
        Buy Now
      </button>
    </div>
  );
};

PriceOption.PropTypes = {
  option: PropTypes.object,
};
export default PriceOption;
