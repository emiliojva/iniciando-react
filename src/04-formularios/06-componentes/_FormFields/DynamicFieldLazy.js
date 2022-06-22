import React, { Suspense } from "react";
import useFormValidation from "../../07-useForm/useFormValidation";

const DynamicFieldLazy = ({
  attributes,
  form,
  setForm,
  onError,
  onSuccess,
  ...props
}) => {
  /**
   * Variaveis usadas em locais diferentes
   */
  const { id, type, validation } = attributes;

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

  // const validationField = useForm(type);
  // console.log(validationField);

  /**
   * Esse trecho de código com useMemo. Diz para o React nao fazer o import novamente.
   * E sim, usar o primeiro Component gerado
   */
  const DynamicField = React.useMemo(() => {
    // mesmo que -> window[id]= DynamicField;
    return React.lazy(() => {
      return import(`./${Component}`); // importa componente pelo switch/case acima
    });
  }, [Component]);

  /**
   * Validação
   */

  const { value, error, onChange, onBlur } = useFormValidation(validation);
  // console.log(id, validationField);

  /**
   * Handle onChange - Escuta mudança de valores nos Fields
   */
  const handleChangeField = (event) => {
    if (validation) {
      if (onChange) onChange(event);
    }

    const { id, value } = event.target;
    setForm({ ...form, [id]: value });
  };

  React.useEffect(() => {
    console.log(error);

    /**
     * Eventos baseados em estados para sinalizar se o campo passou na validação
     */
    if (error !== null) {
      if (!!error) {
        onError({ ref, attributes, error });
      }
    } else {
      onSuccess({ ref, attributes });
    }
  }, [error]);

  /**
   * Retorna somente se o memo já tiver capturado instancia do import
   */
  if (DynamicField === null) return null;

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
          onBlur={onBlur}
          ref={ref}
          value={value}
          {...props}
          {...attributes}
        />
        {error}
      </Suspense>
    </>
  );
};

export default DynamicFieldLazy;
