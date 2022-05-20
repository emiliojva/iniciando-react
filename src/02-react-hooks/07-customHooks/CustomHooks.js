import React from 'react'
import Exemplo1 from './01-exemplo/Exemplo1';
import Exemplo2 from './02-exemplo/Exemplo2';

export default function CustomHooks() {
  return (
    <section>

      <div>React Custom Hooks</div> <hr />

      {/* useCustomHook 1  - useLocalStorage*/}
      {/* <Exemplo1 /> */}

      {/* useCustomHook 2  - useFetch*/}
      <Exemplo2 />
      

    </section>
  )
}
