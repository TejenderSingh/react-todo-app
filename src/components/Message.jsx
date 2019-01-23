import React from "react";
import PropTypes from "prop-types";

const Message = ({ message }) => {
  return (
    <article className="message is-link is-centered">
      <div className="message-body">
        <strong>{message} </strong>
      </div>
    </article>
  );
};

Message.propTypes = {
  message: PropTypes.string.isRequired
};
export default Message;
