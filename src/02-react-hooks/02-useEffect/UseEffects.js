import React from 'react'
import Exemplo1 from './01-exemplo/Exemplo1'
import Exemplo2 from './02-exemplo/Exemplo2'
import Exemplo3 from './03-exemplo/Exemplo3'
import Exemplo4 from './04-exemplo/Exemplo4'
import DesafioUseEffect from './desafio/DesafioUseEffect';

export default function UseEffects() {
  return (
    <section>

      <div>UseEffects</div>

      {/* useEffect monitorando clique e efetuando contagem */}
      {/* <Exemplo1 /> */}
      
      {/* useEffect consumindo api com fetch */}
      {/* <Exemplo2 />  */}

      {/* Podemos ter diversos useEffect no nosso código.  */}
      {/* <Exemplo3 />  */}

      {/* useEffect executar um efeito sempre que um componente for desmontado */}
      {/* <Exemplo4 /> */}

      <DesafioUseEffect />


    </section>
  )
}
