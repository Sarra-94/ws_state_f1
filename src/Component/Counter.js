import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    // old methods (avant arrow functions)
    // this.Increment = this.Increment.bind(this);
  }

  // counter should be an arrow function
  Increment = () => {
    console.log(this);
    // this represents the Class Counter
    this.setState({ count: this.state.count + 1 });
    // this method didnt change the real DOM
    // this.state.count = this.state.count + 1;
    // console.log(this.state.count);
  };

  Decrement = () => {
    // console.log(this);
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div className="counter">
        <button onClick={this.Increment}>+</button>
        <h2>{this.state.count}</h2>
        <button onClick={this.Decrement}>-</button>
      </div>
    );
  }
}

export default Counter;
