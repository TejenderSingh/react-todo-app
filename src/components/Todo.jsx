import PropTypes from "prop-types";
import React from "react";

const Todo = ({ todo, toggleComplete, handleDelete }) => {
  return (
    <div style={rootDiv}>
      <div style={divStyle}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo)}
            style={{ marginRight: 5, cursor: "pointer" }}
          />
          <p
            style={{
              color: todo.completed ? "grey" : "",
              textDecoration: todo.completed ? "line-through" : "none"
            }}
          >
            {todo.title}
          </p>
        </div>
        <button
          onClick={() => handleDelete(todo.id)}
          className="delete is-medium"
        />
      </div>
    </div>
  );
};

const divStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "60%",
  marginBottom: 2,
  padding: 10,
  maxWidth: 600,
  background: "#ecf0f1",
  borderRadius: "0.2em"
};
const rootDiv = {
  display: "flex",
  justifyContent: "center"
};

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
};
export default Todo;
