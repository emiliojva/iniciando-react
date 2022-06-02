import React, { startTransition } from "react";
import DynamicField from "./FormFields/DynamicField";

/**
 * Inputs do Form
 */
const formFields = [
  { id: "nome", label: "Nome", type: "text", required: true },
  { id: "email", label: "Email", type: "email", required: true },
  { id: "senha", label: "Senha", type: "password", required: true },
  { id: "cep", label: "Cep", type: "text", required: true },
  { id: "rua", label: "Rua", type: "text", required: true },
  { id: "numero", label: "Número", type: "number", required: true },
  { id: "bairro", label: "Bairro", type: "text", required: true },
  { id: "cidade", label: "Cidade", type: "text", required: true },
  { id: "estado", label: "Estado", type: "text", required: true },
  { id: "btnSubmit", label: "Enviar", type: "submit" },
];

/**
 * Inicia valores com string vazia e campo por id
 */
const initialStateForm = formFields.reduce((acumulador, field) => {
  return { ...acumulador, [field.id]: "" };
}, {});

const DesafioFormContatoPost = () => {
  const [form, setForm] = React.useState(initialStateForm);
  const [response, setResponse] = React.useState(null);

  /**
   * Manipulador do submit form
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);

    const url = "https://ranekapi.origamid.dev/json/api/usuario";
    const options = {
      method: "POST",
      Headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    };
    fetch(url, options)
      .then((response) => {
        console.log(response);
        response.json();
      })
      .then((json) => {
        setResponse(json);
        console.log(json);
        setTimeout(() => setResponse(null), 3000);
      });
  };

  /* Render */
  return (
    <div>
      <h1>DesafioFormContatoPost</h1>
      <form onSubmit={handleSubmit}>
        {/* Iterando sobre o campos do formulario */}
        {formFields.map((field, index) => (
          <div key={index}>
            <DynamicField
              attributes={field}
              value={form[field.id]}
              form={form} /* Objeto de Ligação entre field e state atual form */
              setForm={setForm} /* Ligação com alteração de estado do form */
            />
            <span>{form[field.id]}</span>
          </div>
        ))}
      </form>

      {response && response.message && (
        <div>{response.message || "Nothing to talk"}</div>
      )}
    </div>
  );
};

export default DesafioFormContatoPost;
