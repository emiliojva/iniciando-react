import React from 'react'
import Exemplo1 from './01-exemplo/Exemplo1'
import Exemplo2 from './01-exemplo/Exemplo2'

export default function UseMemo() {
  return (
    <section>

      <div>UseCallback</div>

      {/* useCallback */}
      {/* <Exemplo1 /> */}

      {/* usecallback caso real. Testando com pilha de funções */}
      <Exemplo2 />
      

    </section>
  )
}
