import React, { Component } from "react";
class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    alert("component is mounted");
  }

  render() {
    return <h2>Life Cycle</h2>;
  }
}

export default LifeCycle;
