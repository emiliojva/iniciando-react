import React from 'react'
import Exemplo2 from './02-exemplo/Exemplo2'
import Exemplo1 from './01-exemplo/Exemplo1'
import Exemplo3 from './03-exemplo/Exemplo3'

export default function UseRef() {
  return (
    <section>

      <div>UseRef</div>

      {/* useRef ou React.useRef() retorna um objeto DOM com a propriedade current. */}
      {/* <Exemplo1 /> */}
      
      {/* useRef com event focus. Quando precisamos de uma referência do elemento par disparar evento */}
      {/* <Exemplo2 /> */}

      <Exemplo3 />
      
      

    </section>
  )
}
