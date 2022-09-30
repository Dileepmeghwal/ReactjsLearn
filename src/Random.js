import React from "react";

class Random extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Dileep"
    };
  }
  change() {
    this.setState({
      name: "Amit"
    });
  }

  render() {
    return (
      <>
        <h3>{this.state.name}</h3>
        <button onClick={() => this.change()}>Click</button>
      </>
    );
  }
}

export default Random;
