import React from 'react'

/**
 * React.useMemo()
 * ==============
 */
export default function Exemplo1() {

  const [contar, setContar] = React.useState(0);

  const teste1 = performance.now();
  const valor = React.useMemo( () => operacaoLenta() , [] );
  const testeFinal = performance.now() - teste1;
  // console.log(valor);
  console.log( testeFinal );

  // const valor = React.useMemo( () => {
  //   const localStorageItem = window.localStorage.getItem('produto');
  //   console.log('teste');
  //   return localStorageItem;

  // }, []);

  return (
    <div>
      <button onClick={() => setContar(contar + 1)}>{contar}</button> {testeFinal}
    </div>
  )
}


function operacaoLenta() {
  let c;
  for (let i = 0; i < 100000000; i++) {
    c = i + i / 10;
  }
  return c;
}