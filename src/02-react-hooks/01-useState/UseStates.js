import React from 'react'
import Exemplo1 from './01-exemplo/Exemplo1';
import Exemplo2 from './02-exemplo/Exemplo2';
import Exemplo3 from './03-exemplo/Exemplo3';
import Exemplo4 from './04-exemplo/Exemplo4';
import Exemplo5 from './05-exemplo/Exemplo5';
import Exemplo6 from './06-exemplo/Exemplo6';
import Exemplo7 from './07-exemplo/Exemplo7';
import Exemplo8 from './08-exemplo/Exemplo8';
import ListarProdutos from './desafio/ListarProdutos';

export default function UseStates() {
  return (

    <section>

      <div>UseStates</div>

      {/* Desafio useState -  Listar Produtos */}
      <ListarProdutos />
      
      {/* Explicação do <React.StrictMode> do index.js */}
      {/* <Exemplo8 /> */} 

      {/* Uso de Callbacks e previas manipulações */}
      {/* <Exemplo7 /> */} 

      {/* Exemplo de Reativo e Não reativo */}
      {/* <Exemplo6 /> */} 

      {/* <Exemplo5 /> */}

      {/* <Exemplo4 /> */}

      {/* <Exemplo3 /> */}

      {/* <Exemplo2 /> */}
      
      {/* <Exemplo1 /> */}

    </section>
    
  );
}
