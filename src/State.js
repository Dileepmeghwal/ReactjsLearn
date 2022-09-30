import React, { Component } from "react";
import { render } from "react-dom";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      name: "Ajay"
    };
  }
  changeName() {
    this.setState({
      name: "Dileep Meghwal"
    });
  }
  render() {
    return (
      <>
        <h3>{this.state.name}</h3>
        <button onClick={() => this.changeName()}>Action</button>
      </>
    );
  }
}

export default Message;
