import React from "react";

class Car extends React.Component {
  render() {
    const { name, color } = this.props;
    return (
      <>
        <h2>Class Comp</h2>
        <h2>
          {name} and {color}
        </h2>
      </>
    );
  }
}

export default Car;
