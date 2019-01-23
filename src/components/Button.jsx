import React from "react";
import PropTypes from "prop-types";
const Button = ({ name, color, click, todoLength }) => {
  return (
    <button onClick={click} className={`button ${color} is-selected`}>
      {` ${name} ${todoLength} `}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
  todoLength: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
export default Button;
