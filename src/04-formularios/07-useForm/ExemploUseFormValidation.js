import React from "react";
import DynamicFormLazy from "../06-componentes/_FormFields/DynamicFormLazy";

/**
 * Inputs do Form
 */
export const formFields = [
  {
    id: "aplicacoes",
    label: "Aplicações",
    type: "checkbox",
    options: [
      { value: 1, label: "Aplicabilidade" },
      { value: 2, label: "Application" },
      { value: 3, label: "Aplica Aplica" },
    ],
    required: true,
  },
  {
    id: "udts",
    label: "Unidades de Desenvolvimento Técnologico",
    type: "radio",
    options: [
      { value: 0, label: "Todas" },
      { value: 2, label: "Em Analise" },
      { value: 3, label: "Recusadas" },
      { value: 1, label: "Ativas" },
    ],
    value: 2,
    required: true,
  },
  {
    id: "usuario",
    label: "Usuario",
    type: "select",
    options: [
      { value: 1, label: "Operador" },
      { value: 2, label: "Administrador" },
      { value: 3, label: "Responsável" },
    ],
    required: true,
  },
  { id: "nome", label: "Nome", type: "text", required: true },
  { id: "email", label: "Email", type: "email", required: true },
  { id: "senha", label: "Senha", type: "password", required: true },
  {
    id: "cep",
    label: "Cep",
    type: "text",
    required: true,
    validation: "cep",
  },
  { id: "rua", label: "Rua", type: "text", required: true },
  { id: "numero", label: "Número", type: "number", required: true },
  { id: "bairro", label: "Bairro", type: "text", required: true },
  { id: "cidade", label: "Cidade", type: "text", required: true },
  { id: "estado", label: "Estado", type: "text", required: true },
  { id: "btnSubmit", label: "Enviar", type: "submit" },
];

const ExemploUseFormValidation = () => {
  return (
    <div>
      Exemplo Form dinamico com hook useForm para validação
      <hr />
      <DynamicFormLazy fields={formFields} />
    </div>
  );
};

export default ExemploUseFormValidation;