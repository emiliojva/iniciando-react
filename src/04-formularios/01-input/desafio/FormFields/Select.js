import React from "react";

const Select = React.forwardRef(({ id, label, options, ...props }, ref) => {
  return (
    <div>
      <label>{label}</label>
      <select name={id} id={id} ref={ref} {...props}>
        <option value="" disabled>
          Selecione
        </option>
        {options &&
          options.map((option, key) => (
            <option value={option.value} key={key}>
              {option.label}
            </option>
          ))}
      </select>
    </div>
  );
});

export default Select;
