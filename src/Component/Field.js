import React, { Component } from "react";
class Field extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };
  // when i change the state the render reactivate
  componentDidUpdate() {
    alert("component Updated");
  }
  render() {
    return (
      <div>
        <h2>handle Input Value</h2>
        <div className="inputStyle">
          <input
            placeholder="enter your name"
            value={this.state.name}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <h3>Your name is {this.state.name}</h3>
        </div>
      </div>
    );
  }
}

export default Field;
