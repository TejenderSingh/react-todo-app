import PropTypes from "prop-types";
import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, onDelete, toggleComplete }) => {
  return todos.map(todo => (
    <Todo
      key={todo.id}
      todo={todo}
      handleDelete={onDelete}
      toggleComplete={toggleComplete}
    />
  ));
};
TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired
};
export default TodoList;
