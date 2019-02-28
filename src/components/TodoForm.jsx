import PropTypes from "prop-types";
import React, { Component } from "react";
import shortId from "shortid";

class TodoForm extends Component {
  state = { text: "", textError: "" };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  validate = () => {
    let textError = "";
    if (!this.state.text) {
      textError = "Please enter some text";
    }
    if (textError) {
      this.setState({ textError });
      return false;
    }
    return true;
  };
  handleSubmit = e => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      this.props.handleSubmit({
        id: shortId.generate(),
        title: this.state.text,
        completed: false
      });
      this.setState({ text: "", textError: "" });
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div style={{ margin: "3rem 0" }}>
          <div className="field is-grouped is-grouped-centered handleForm">
            <p className="control">
              <input
                className="input is-medium is-rounded"
                value={this.state.text}
                name="text"
                onChange={e => this.handleChange(e)}
                placeholder="What needs to be done?"
              />
            </p>
            <input
              className="button is-info is-outlined is-medium is-rounded mgTop"
              type="submit"
              value="Add Todo"
            />
          </div>
          <div
            style={{
              color: "red",
              display: "flex",
              justifyContent: "center"
            }}
          >
            {this.state.textError}
          </div>
        </div>
      </form>
    );
  }
}

TodoForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};
export default TodoForm;
