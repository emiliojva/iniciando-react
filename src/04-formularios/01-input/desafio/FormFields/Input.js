import React from "react";

const Input = ({ id, label, type, ...props }) => {
  return (
    <div>
      <label>{label}</label>
      <input name={id} id={id} type={type} {...props} />
    </div>
  );
};

export default Input;
