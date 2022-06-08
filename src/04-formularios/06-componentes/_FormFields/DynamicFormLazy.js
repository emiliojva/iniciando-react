import React from "react";
import DynamicFieldLazy from "./DynamicFieldLazy";

const DynamicFormLazy = ({ fields }) => {
  /**
   * Inicia um estado reduzindo o objeto ao parar {nome_field: ''}. Para quantos campos forem passados
   */
  const [form, setForm] = React.useState(() => {
    /**
     * Inicia valores com string vazia e campo por id
     */
    return fields.reduce((acumulador, field) => {
      return { ...acumulador, [field.id]: "" };
    }, {});
  });

  /**
   * Manipulador do submit form
   */
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  /* Render */
  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* Iterando sobre o campos do formulario */}
        {fields.map((field, index) => (
          <div key={index}>
            <DynamicFieldLazy
              attributes={field}
              value={form[field.id]}
              form={form} /* Objeto de Ligação entre field e state atual form */
              setForm={setForm} /* Ligação com alteração de estado do form */
              // type={field.type}
            />
            <span>{form[field.id]}</span>
          </div>
        ))}
      </form>
    </>
  );
};

export default DynamicFormLazy;
