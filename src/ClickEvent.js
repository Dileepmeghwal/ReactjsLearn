import React from "react";

const ClickEvent = () => {
  const clickHandler = () => {
    console.log("Clicked");
  };
  return (
    <>
      <button onClick={clickHandler}>Click</button>
    </>
  );
};

export default ClickEvent;
