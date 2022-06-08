import React from "react";

const Radio = React.forwardRef(({ id, value, options, ...props }, ref) => {
  /**
   * State para controlar mudanças de valores nas opções do radio
   */
  const [radio, setRadio] = React.useState(value || 0);

  /**
   * Seleciona a label com valor ZERO(int ou string)
   */
  const [labelSelected, setLabelSelected] = React.useState(() => {
    const op = options.filter((o) => Number(o.value) === radio);
    return op[0].label || null;
  });

  const previousValue = React.useRef();
  React.useEffect(() => {
    previousValue.current = radio;
  }, [radio]);

  /**
   * Event Handle para escutar alterações de opções das radios com mesmo name
   */
  const handleChange = ({ target }) => {
    setRadio(target.value);
    setLabelSelected(target.dataset.label);
  };

  return (
    <div ref={ref}>
      {/* {radio} - {labelSelected} - Valor anterior - {previousValue.current} */}
      <hr />
      {options &&
        options.map((option, index) => (
          <label key={index} htmlFor={id + "_" + option.value}>
            {radio} === {option.value}
            <input
              id={id + "_" + option.value}
              name={id}
              type="radio"
              value={option.value}
              checked={Number(radio) === Number(option.value)}
              onChange={handleChange}
              data-label={option.label}
              // {...props}
            />
            {option.label}
          </label>
        ))}
    </div>
  );
});

export default Radio;
