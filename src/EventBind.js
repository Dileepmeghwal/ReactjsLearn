import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello Good Morning"
    };
  }
  eventHandler() {
    this.setState({
      message: "Bye Nice to meet U"
    });
  }
  render() {
    return (
      <>
        <p>{this.state.message}</p>
        {/* <button onClick={this.eventHandler.bind(this)}>Click</button> */}
        <button onClick={() => this.eventHandler}>Click</button>
      </>
    );
  }
}

export default EventBind;
