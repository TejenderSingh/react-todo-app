import React from "react";
import PropTypes from "prop-types";
const Button = ({ name, color, click }) => {
  return (
    <button onClick={click} className={`button ${color}`}>
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  click: PropTypes.func
};
export default Button;
