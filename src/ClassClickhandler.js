import React from "react";

class ClassClick extends React.Component {
  ClickHandler() {
    console.log("Button clicked!");
  }
  render() {
    return (
      <>
        <button onClick={this.ClickHandler}>Click</button>
      </>
    );
  }
}

export default ClassClick;
