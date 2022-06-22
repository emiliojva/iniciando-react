import React from "react";

const types = {
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    message: "Cep inválido",
  },
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Email inválido",
  },
};

/**
 * type: Tipo de campo do formulario: email, cep, cpf e etc.
 */
const useFormValidation = (type_validation) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);

  if (!type_validation) return true;

  const onChange = ({ target }) => {
    if (error) validate(target.value); //

    setValue(target.value);
  };

  const validate = (value) => {
    // console.log("validate", value, type, types[type].regex);
    if (value.length === 0) {
      setError("Preecha um valor");
      return false;
    } else if (
      types[type_validation] &&
      types[type_validation].regex.test(value) === false
    ) {
      // cep
      setError(types[type_validation].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: () => validate(value), // ao sair do field
  };
};

export default useFormValidation;
