import React from "react";
import Exemplo1 from "./01-input/01-exemplo/Exemplo1";
import Exemplo2 from "./01-input/02-exemplo/Exemplo2";
import Exemplo3 from "./01-input/03-exemplo/Exemplo3";
import DesafioFormContatoPost from "./01-input/desafio/DesafioFormContatoPost";
import DesafioFormContatoPostWithLazy from "./01-input/desafio/DesafioFormContatoPostWithLazy";
import Textarea from "./02-textarea/01-exemplo/Textarea";
import Select from "./03-Select/01-exemplo/Select";
import SelectDisabled from "./03-Select/02-exemplo/SelectDisabled";
import Radio from "./04-radios/01-exemplo/Radio";
import Checkbox from "./05-checkbox/01-exemplo/Checkbox";
import CheckboxMultiple from "./05-checkbox/02-exemplo/CheckboxMultiple";
import CheckboxMultipleOp from "./05-checkbox/03-exemplo/CheckboxMultipleOp";
import ExemploComponenteInput from "./06-componentes/01-Input/ExemploComponenteInput";
import ExemploComponenteSelect from "./06-componentes/02-Select/ExemploComponenteSelect";

export default function AppFormularios() {
  return (
    <section>
      <div>React - Formulários</div> <hr />
      {/*****************************************************/}
      {/* Usando Formularios com input - Com useState */}
      {/* <Exemplo1 />  */}
      {/*****************************************************/}
      {/* Usando Input dinamicos - useForm*/}
      {/* Formulário com Input Encapsulados */}
      {/* <Exemplo2 /> */}
      {/*****************************************************/}
      {/* Form Dinamico - Monta formulario com base em um objeto literal */}
      {/* <Exemplo3 /> */}
      {/*****************************************************/}
      {/* Desafio - Formulário de Contato dinamico e fetch */}
      {/* <DesafioFormContatoPost /> */}
      {/* <DesafioFormContatoPostWithLazy /> */}
      {/*****************************************************/}
      {/*****************************************************/}
      {/* Usando Formularios com textarea */}
      {/* <Textarea /> */}
      {/*****************************************************/}
      {/*****************************************************/}
      {/* Usando Formularios com selects */}
      {/* <Select /> */}
      {/* Selects com primeiro item bloqueado */}
      {/* <SelectDisabled /> */}
      {/*****************************************************/}
      {/* Usando Formularios com input[radio] */}
      {/* <Radio /> */}
      {/* Usando Formularios com input[checkbox] */}
      {/* <Checkbox /> */}
      {/* Usando Formularios com input[checkbox] */}
      {/* <CheckboxMultiple /> */}
      {/* Usando Checkbox otimizadas com arrays de cores */}
      {/* <CheckboxMultipleOp /> */}
      {/* Processo de Componentizaçao - Input */}
      {/* <ExemploComponenteInput />       */}
      {/* Processo de Componentizaçao - Input */}
      <ExemploComponenteSelect />
    </section>
  );
}
