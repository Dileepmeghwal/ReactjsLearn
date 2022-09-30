import React from "react";

class Fruits extends React.Component {
  render() {
    const { name, rate } = this.props;

    return (
      <>
        <p>
          {name} and it {rate}
        </p>
      </>
    );
  }
}

export default Fruits;
