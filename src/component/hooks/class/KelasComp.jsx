import React, { Component } from "react";

export default class KelasComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jumlah: 0,
    };
  }

  increment = () => {
    this.setState({
      jumlah: this.state.jumlah + 1,
    });
  };

  render() {
    return (
      <>
        <h1>{this.state.jumlah}</h1>
        <button onClick={this.increment}>Click</button>
      </>
    );
  }
}
