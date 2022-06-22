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

  const refError = React.useRef([]);

  /**
   * Capturar quais field apresentaram erros no evento onError do <DynamicFieldLazy>
   */
  const handleErrors = (e) => {
    if (refError.current) {
      let r = refError.current.find((el) => {
        console.log(el.attributes.id, "===", e.attributes.id);
        return el.attributes.id === e.attributes.id;
      });

      if (r === undefined) {
        console.log("array zerado", r, e);
        refError.current = [...refError.current, e];
      }
    }
  };

  /**
   * limpa pilha de erros para permitir formulario dar submit
   */
  const handleSuccess = (e) => {
    console.log("success", e);
    if (refError.current) {
      refError.current = [];
    }
  };
  /**
   * Manipulador do submit form
   */
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(refError);
    if (refError.current.length > 0) {
      console.log("Não pode submeter");
      return false;
    }

    console.log("ok Formulario certinho");
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
              onError={handleErrors}
              onSuccess={handleSuccess}
            />
            <span>{form[field.id]}</span>
          </div>
        ))}
      </form>
    </>
  );
};

export default DynamicFormLazy;
