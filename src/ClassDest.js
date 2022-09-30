import React from "react";

const Dost = (props) => {
  const { name, age } = props;
  return (
    <>
      <p>
        {name} and {age}
      </p>
    </>
  );
};

export default Dost;
