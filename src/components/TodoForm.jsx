import React, { Component } from "react";
import shortId from "shortid";
import PropTypes from "prop-types";

class TodoForm extends Component {
  state = { text: "" };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit({
      id: shortId.generate(),
      title: this.state.text,
      completed: false
    });
    this.setState({ text: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div
          className="field is-grouped is-grouped-centered handleForm"
          style={{ margin: "3rem 0" }}
        >
          <p className="control">
            <input
              className="input is-medium is-rounded"
              value={this.state.text}
              name="text"
              onChange={e => this.handleChange(e)}
              placeholder="Buy Laptop..."
            />
          </p>
          <p className="control">
            <button
              onClick={this.handleSubmit}
              className="button is-info is-outlined is-medium is-rounded mgTop"
            >
              Add Todo
            </button>
          </p>
        </div>
      </form>
    );
  }
}

TodoForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};
export default TodoForm;
