import React from "react";
import DynamicFieldLazy from "./FormFields/DynamicFieldLazy";
// import Select from "./FormFields/Select";

/**
 * Inputs do Form
 */
const formFields = [
  {
    id: "usuario",
    label: "Usuario",
    type: "select",
    options: [
      { value: "1", label: "Operador" },
      { value: "2", label: "Administrador" },
      { value: "3", label: "Responsável" },
    ],
    required: true,
  },
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

const FormContatoPostWithLazy = () => {
  const [form, setForm] = React.useState(initialStateForm);
  const [response, setResponse] = React.useState(null);

  /**
   * Manipulador do submit form
   */
  const handleSubmit = (event) => {
    event.preventDefault();

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
      <h1>DesafioFormContatoPostWithLazy</h1>
      <form onSubmit={handleSubmit}>
        {/* <Select
          id="usuario"
          label="Usuarios"
          type="select"
          options={[
            { value: "1", label: "Operador" },
            { value: "2", label: "Administrador" },
            { value: "3", label: "Responsável" },
          ]}
        /> */}

        {/* Iterando sobre o campos do formulario */}
        {formFields.map((field, index) => (
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

      {response && response.message && (
        <div>{response.message || "Nothing to talk"}</div>
      )}
    </div>
  );
};

export default FormContatoPostWithLazy;
