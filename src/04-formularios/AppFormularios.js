import React from "react";
import Exemplo1 from "./01-input/01-exemplo/Exemplo1";
import Exemplo2 from "./01-input/02-exemplo/Exemplo2";
import Exemplo3 from "./01-input/03-exemplo/Exemplo3";
import DesafioFormContatoPost from "./01-input/desafio/FormContatoPost";
import Textarea from "./02-textarea/01-exemplo/Textarea";

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
      {/*****************************************************/}
      {/*****************************************************/}
      {/* Usando Formularios com textarea */}
      <Textarea />
    </section>
  );
}
