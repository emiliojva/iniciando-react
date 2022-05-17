import React, { Component } from 'react'
import Exemplo1 from './01-useState/exemplo1/Exemplo1';
import Exemplo2 from './01-useState/exemplo2/Exemplo2';
import Exemplo3 from './01-useState/exemplo3/Exemplo3';
import Exemplo4 from './01-useState/exemplo4/Exemplo4';

export default class AppHooks extends Component {
  render() {
    document.title = "React Hooks";
    return (
      <div>
        App - Hooks
        <hr />
        <section>
          <Exemplo4 />
          {/* <Exemplo3 /> */}
          {/* <Exemplo2 /> */}
          {/* <Exemplo1 /> */}
        </section>
      </div>
      
    )
  }
}
