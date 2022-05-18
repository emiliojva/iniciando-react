import React, { Component } from 'react'
import Exemplo1 from './01-useState/01-exemplo/Exemplo1';
import Exemplo2 from './01-useState/02-exemplo/Exemplo2';
import Exemplo3 from './01-useState/03-exemplo/Exemplo3';
import Exemplo4 from './01-useState/04-exemplo/Exemplo4';
import Exemplo5 from './01-useState/05-exemplo/Exemplo5';
import Exemplo6 from './01-useState/06-exemplo/Exemplo6';
import Exemplo7 from './01-useState/07-exemplo/Exemplo7';
import Exemplo8 from './01-useState/08-exemplo/Exemplo8';
import ListarProdutos from './01-useState/desafio/ListarProdutos';

export default class AppHooks extends Component {
  render() {
    document.title = "React Hooks";
    return (
      <div>
        App - Hooks
        <hr />
        <section>
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
      </div>
      
    )
  }
}
