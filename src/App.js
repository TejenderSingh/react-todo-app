import React, { Component } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import Message from "./components/Message";
import Button from "./components/Button";

class App extends Component {
  state = {
    todos: [
      { id: 1, title: "Buy Bicycle", completed: false },
      { id: 2, title: "Wash Car", completed: false },
      { id: 3, title: "Walk Dog", completed: false }
    ],
    todosToShow: "all",
    toggleAllComplete: true
  };

  handleAddTodo = todo => {
    this.setState(state => ({ todos: [todo, ...state.todos] }));
  };
  handleDeleteTodo = id => {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos });
  };
  handleToggleComplete = todo => {
    const todos = [...this.state.todos];
    const index = todos.indexOf(todo);
    todos[index] = { ...todos[index] };
    todos[index].completed = !todos[index].completed;
    this.setState({ todos });
  };
  handleTodoToShow = val => {
    this.setState({ todosToShow: val });
  };
  handleRemoveAllCompleted = () => {
    this.setState(state => ({
      todos: state.todos.filter(todo => !todo.completed)
    }));
  };
  handleCheckAll = () => {
    this.setState(state => ({
      todos: state.todos.map(todo => ({
        ...todo,
        completed: state.toggleAllComplete
      })),
      toggleAllComplete: !state.toggleAllComplete
    }));
  };

  render() {
    const { todos, todosToShow, toggleAllComplete } = this.state;
    let newTodos = [];
    if (todosToShow === "all") {
      newTodos = todos;
    } else if (todosToShow === "active") {
      newTodos = todos.filter(todo => !todo.completed);
    } else if (todosToShow === "completed") {
      newTodos = todos.filter(todo => todo.completed);
    }

    let msg, btn;
    if (todos.length !== 0) {
      msg = <Message message={`Total Todos: ${todos.length}`} />;
      btn = (
        <section style={{ marginTop: "2rem" }}>
          <div className="buttons has-addons is-centered">
            <Button
              color={"is-primary"}
              name={"All"}
              click={() => this.handleTodoToShow("all")}
              todoLength={""}
            />
            <Button
              color={"is-link"}
              name={"Active"}
              click={() => this.handleTodoToShow("active")}
              todoLength={todos.filter(todo => !todo.completed).length}
            />
            <Button
              color={"is-success"}
              name={"Completed"}
              click={() => this.handleTodoToShow("completed")}
              todoLength={todos.filter(todo => todo.completed).length}
            />
            <Button
              color={"is-warning"}
              name={toggleAllComplete ? "Check All" : "Uncheck All"}
              click={this.handleCheckAll}
              todoLength={""}
            />
          </div>
          {todos.some(todo => todo.completed) ? (
            <div className="buttons is-centered">
              <button
                onClick={this.handleRemoveAllCompleted}
                className="button is-danger is-centered"
              >
                Remove All Completed
              </button>
            </div>
          ) : null}
        </section>
      );
    }
    return (
      <React.Fragment>
        <Header />
        <section className="container">
          {todos.length === 0 && <Message message={"Add some Todos."} />}
          {msg}
          <TodoForm handleSubmit={this.handleAddTodo} />
          <TodoList
            todos={newTodos}
            onDelete={this.handleDeleteTodo}
            toggleComplete={this.handleToggleComplete}
          />
          {btn}
        </section>
      </React.Fragment>
    );
  }
}

export default App;
