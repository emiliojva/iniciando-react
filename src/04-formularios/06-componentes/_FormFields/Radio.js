import React from "react";

const Radio = React.forwardRef(
  ({ id, value, options, onChange, ...props }, ref) => {
    /**
     * State para controlar mudanças de valores nas opções do radio
     */
    const [radio, setRadio] = React.useState(value || null);

    // /**
    //  * Seleciona a label com valor ZERO(int ou string)
    //  */
    // const [labelSelected, setLabelSelected] = React.useState(() => {
    //   if (options.value === undefined && options.label === undefined) {
    //     return value;
    //   }

    //   const op = options.filter((o) => {
    //     const value = o.value || o;
    //     return String(value) === String(radio);
    //   });

    //   if (op.length === 0) {
    //     return 0;
    //   }

    //   if (op[0] !== undefined) {
    //     if (op[0].label !== undefined) {
    //       // opcoes com label definida no json
    //       return op[0].label;
    //     }

    //     return op[0]; // para opcoes com arrays simples(unidimensional)
    //   }
    // });

    const previousValue = React.useRef();
    React.useEffect(() => {
      previousValue.current = radio;
    }, [radio]);

    /**
     * Event Handle para escutar alterações de opções das radios com mesmo name
     */
    const handleChange = (event) => {
      onChange(event);

      const { target } = event;
      setRadio(target.value);
      // setLabelSelected(target.dataset.label);
    };

    return (
      <>
        {/* <div ref={ref}> */}
        {/* {radio} - {labelSelected} - Valor anterior - {previousValue.current} */}
        {options &&
          options.map((option, index) => (
            <label key={index} htmlFor={id + "_" + index} ref={ref}>
              <input
                id={id + "_" + index}
                name={id}
                type="radio"
                value={option.value || option}
                checked={String(radio) === String(option.value || option)}
                onChange={handleChange}
                data-label={option.value || option}
                {...props}
              />
              {option.value || option}
            </label>
          ))}
        {/* </div> */}
      </>
    );
  }
);

export default Radio;
