import React from "react";

const Button = ({ children, ...props }) => {
  console.log("button", props);
  return (
    <>
      <br />
      <button {...props}>{children}</button>
    </>
  );
};

export default Button;
