import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    // initialize state
    this.state = {
      counter: 0
    };
  }
  render() {
    const { counter } = this.state;
    return (
      <div>
        <h1>Counter</h1>
        <p>Counter: { counter }</p>
        <button onClick={() => this.setState({ counter: counter + 1 })}>Add</button>
        <button onClick={() => this.setState({ counter: counter - 1 })}>Minus</button>
      </div>
    );
  }
}
