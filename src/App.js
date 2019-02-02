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
      { id: 1, title: "Buy grocery", completed: false },
      { id: 2, title: "Redesign website", completed: true },
      { id: 3, title: "Walk the Dog", completed: false }
    ],
    todosToShow: "all"
  };

  handleAddTodo = todo => {
    this.setState(state => ({ todos: [...state.todos, todo] }));
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
  handleCheckAll = e => {
    e.persist();
    this.setState(state => ({
      todos: state.todos.map(todo => ({
        ...todo,
        completed: e.target.checked
      }))
    }));
  };
  activeTodos = () => {
    return this.state.todos.filter(todo => !todo.completed);
  };
  render() {
    const { todos, todosToShow } = this.state;
    let newTodos = [];
    if (todosToShow === "all") {
      newTodos = todos;
    } else if (todosToShow === "active") {
      newTodos = todos.filter(todo => !todo.completed);
    } else if (todosToShow === "completed") {
      newTodos = todos.filter(todo => todo.completed);
    }

    let msg, btn, mainCheckbox;
    if (todos.length) {
      msg = <Message message={`Todos left: ${this.activeTodos().length}`} />;
      btn = (
        <section style={{ marginTop: "2rem" }}>
          <div className="buttons has-addons is-centered">
            <Button
              color={"is-primary"}
              name={"All"}
              click={() => this.handleTodoToShow("all")}
            />
            <Button
              color={"is-link"}
              name={"Active"}
              click={() => this.handleTodoToShow("active")}
            />
            <Button
              color={"is-success"}
              name={"Completed"}
              click={() => this.handleTodoToShow("completed")}
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
      mainCheckbox = (
        <div
          style={{
            width: "60%",
            maxWidth: 600,
            margin: "0 auto",
            paddingLeft: 10
          }}
        >
          <label className="checkbox">
            <input
              type="checkbox"
              onChange={this.handleCheckAll}
              checked={this.activeTodos().length ? false : true}
              style={{ margin: "10px 5px 0 0" }}
            />
            {this.activeTodos().length ? "Check all" : "Uncheck all"}
          </label>
        </div>
      );
    }

    return (
      <React.Fragment>
        <Header />
        {todos.length === 0 && <Message message={"Add some Todos."} />}
        {msg}
        <section className="container">
          <TodoForm handleSubmit={this.handleAddTodo} />
          <TodoList
            todos={newTodos}
            onDelete={this.handleDeleteTodo}
            toggleComplete={this.handleToggleComplete}
          />
          {mainCheckbox}
          {btn}
        </section>
      </React.Fragment>
    );
  }
}

export default App;
