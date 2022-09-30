import React from "react";

const Greet = (props) => {
  const { name, age } = props;
  return (
    <>
      <h1>Hello There Welcome!</h1>
      <p>
        I am {name} and my {age}
      </p>
    </>
  );
};

export default Greet;
