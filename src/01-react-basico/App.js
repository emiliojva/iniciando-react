import React from 'react';
import Exemplo1 from "./01-JSX/Exemplo1";
import Exemplo2 from "./02-JSX/Exemplo2";
import Exemplo3 from "./03-JSX/Exemplo3";
import Exercicio1 from "./exercicios/01-compras";
import Arrays from './04-Arrays/Arrays';
import ExercicioArraysProdutos from './exercicios/02-arrays';
import Eventos from './05-Eventos/Eventos';
import Componenetes from './06-Componentes/Componentes';
import Propriedades from './07-propriedades/Propriedades';
import { DesafioCompomente } from './exercicios/desafio/DesafioCompomente';


export default function AppBasico() {

  return ( 
    <React.Fragment> {/* Isso Não gera TAG pai(div,section ...) Adicional no DOM */} 

      {/* Descomente os tópicos anteriores para testar individualmente os exemplos */}

      {/* Desafio Componenetes */}
      <DesafioCompomente />

      {/* Propriedades */}
      {/* <Propriedades /> */}
      

      {/* Componenetes */}
      {/* <Componenetes /> */}

      {/* Eventos */}
      {/* <Eventos /> */}
      
      {/* Arrays JSX */}
      {/* <ExercicioArraysProdutos />
      <Arrays /> */}
      
      
      {/* 
      <hr />
      Parte 1 dos estudos
      <hr />
      <Exercicio1 /> 
      <hr />
      <Exemplo3 /> 
      <hr />
      <Exemplo2 />
      <hr />
      <Exemplo1 />  
      */}
    </React.Fragment>
  );
};


/**
 * JSX = JavaScript XML / Extension. 
 * Estende a sintaxe do JavaScript, introduzindo elementos como XML que são convertidos em funções de React.
 ***********************************************************************************************************
 * Convencoes 
 * - Return do JSX quando houver quebra de linha ou mais de um elemento necessida do uso de brackets return ( exp... )
 * - O atributos usados nos elementos do JSX são atributos próprios, e não do HTML. Usa-se padrão camelCase. <input className="anythink" />
 * - O Return do component permite apenas uma tag/element pai. Caso queira passar mais de um elemento irmão(siblings), envolva-com outra tag pai. 
 * OU use o compomente fragment do Core React(importe-o) :
 * return <React.fragment> 
 *          <minhasTags/> 
 *          <minhasTags/> 
 *        </React.Fragment>
 *        <!-- vantagem disso: Ele não gera uma tag a mais no DOM. Apenas aplica as tags <minhasTags/> no document. Ele também aceita apenas </>....</>-->
 ***********************************************************************************************************
 */