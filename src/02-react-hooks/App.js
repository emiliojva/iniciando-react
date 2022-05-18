import React, { Component } from 'react'
import Exemplo1 from './01-useState/exemplo1/Exemplo1';
import Exemplo2 from './01-useState/exemplo2/Exemplo2';
import Exemplo3 from './01-useState/exemplo3/Exemplo3';
import Exemplo4 from './01-useState/exemplo4/Exemplo4';
import Exemplo5 from './01-useState/exemplo5/Exemplo5';
import Exemplo6 from './01-useState/exemplo6/Exemplo6';
import Exemplo7 from './01-useState/exemplo7/Exemplo7';
import Exemplo8 from './01-useState/exemplo8/Exemplo8';

export default class AppHooks extends Component {
  render() {
    document.title = "React Hooks";
    return (
      <div>
        App - Hooks
        <hr />
        <section>
          <Exemplo8 /> {/* Explicação do <React.StrictMode> do index.js */}
          {/* <Exemplo7 /> */} {/* Uso de Callbacks e previas manipulações */}
          {/* <Exemplo6 /> */} {/* Exemplo de Reativo e Não reativo */}
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
