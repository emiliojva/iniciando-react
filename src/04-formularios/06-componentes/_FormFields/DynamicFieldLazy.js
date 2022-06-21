import React, { Suspense } from "react";

const DynamicFieldLazy = ({ attributes, form, setForm, ...props }) => {
  /**
   * Variaveis usadas em locais diferentes
   */
  const { id, type } = attributes;

  /**
   * Capitalize emilio => Emilio
   */
  let Component = type.replace(/^[a-z]/, type.charAt(0).toUpperCase());

  // para o caso de alguem precisar da referencia do DOM(input, select, textearea ou etc)
  const ref = React.createRef();

  /**
   * Definir qual Component vou carregar. O padrao é o <Input />.
   */
  switch (type) {
    case "number":
    case "email":
    case "password":
      Component = "Input";
      break;
    case "select":
      Component = "Select";
      break;
    case "radio":
      Component = "Radio";
      break;
    case "checkbox":
      Component = "Checkbox";
      break;
    case "button":
    case "submit":
    case "reset":
      Component = "Button";
      break;
    default:
      Component = "Input";
      break;
  }

  /**
   * Esse trecho de código com useMemo. Diz para o React nao fazer o import novamente.
   * E sim, usar o primeiro Component gerado
   */
  const DynamicField = React.useMemo(() => {
    // mesmo que -> window[id]= DynamicField;
    return React.lazy(() => {
      return import(`./${Component}`);
    });
  }, [Component]);

  /**
   * Handle onChange - Escuta mudança de valores nos Fields
   */
  const handleChangeField = ({ target }) => {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  };

  /**
   * Retorna um Fieldset. Label e Field de acordo com valor passado no type
   */
  return (
    <>
      <Suspense>
        <DynamicField
          id={id}
          name={id}
          onChange={handleChangeField}
          ref={ref}
          {...props}
          {...attributes}
        />
      </Suspense>
    </>
  );
};

export default DynamicFieldLazy;
