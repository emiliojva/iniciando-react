import React from "react";

const Button = React.forwardRef(
  ({ id, label, type, children, ...props }, ref) => {
    console.log("button", props);
    return (
      <>
        <br />
        <button {...props}>{label || children}</button>
      </>
    );
  }
);

export default Button;
