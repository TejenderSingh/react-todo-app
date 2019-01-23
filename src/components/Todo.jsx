import React from "react";
import PropTypes from "prop-types";

const Todo = ({ todo, toggleComplete, handleDelete }) => {
  const pStyle = () => {
    return {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "80%",
      maxWidth: 600,
      background: "#ecf0f1",
      borderRadius: "0.2em",
      textDecoration: todo.completed ? "line-through" : "none"
    };
  };
  return (
    <React.Fragment>
      <div style={rootDiv}>
        <div style={pStyle()}>
          <p
            onClick={() => toggleComplete(todo)}
            style={{ padding: 10, cursor: "pointer" }}
          >
            {todo.title}
          </p>
          <button
            onClick={() => handleDelete(todo.id)}
            className="delete is-medium"
            style={{ marginRight: 10 }}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

const rootDiv = {
  display: "flex",
  justifyContent: "center",
  marginBottom: 2
};

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
};
export default Todo;
