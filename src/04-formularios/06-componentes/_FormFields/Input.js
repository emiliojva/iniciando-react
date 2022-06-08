import React from "react";

const Input = React.forwardRef( ({ id, label, type, ...props },ref) =>{

    return (
      <div>
        <label>{label}</label>
        <input ref={ref} name={id} id={id} type={type} {...props} />
      </div>
    );
})

export default Input;
