import PropTypes from "prop-types";
import { BiCheckCircle } from "react-icons/bi";
const Features = ({ feature }) => {
  return (
    <div className="text-start">
      <p className="flex items-center gap-2">
        <BiCheckCircle className=" rounded-full" /> {feature}
      </p>
    </div>
  );
};

Features.propTypes = {
  feature: PropTypes.string.isRequired,
};

export default Features;
