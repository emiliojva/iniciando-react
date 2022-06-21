import React from "react";

const Checkbox = React.forwardRef(
  ({ id, label, value, options, ...props }, ref) => {
    const [checkbox, setCheckbox] = React.useState([]);

    const handleChange = ({ target }) => {
      if (target.checked) {
        setCheckbox([...checkbox, Number(target.value)]);
      } else {
        setCheckbox(checkbox.filter((v) => v !== Number(target.value)));
      }
    };

    return (
      <div ref={ref}>
        <h3>{label}</h3>
        {checkbox}
        {options.map(({ value, label }, key) => (
          <label key={value + "_" + key} htmlFor={value + "_" + key}>
            {label}
            <input
              onChange={handleChange}
              type="checkbox"
              value={value}
              id={value + "_" + key}
              checked={checkbox.includes(Number(value))}
            />
          </label>
        ))}
      </div>
    );
  }
);

export default Checkbox;
