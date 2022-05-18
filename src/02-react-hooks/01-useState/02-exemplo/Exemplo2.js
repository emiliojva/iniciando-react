import React from 'react'

export default function Exemplo2() {

  /**
   * Hook useState
   * 
   * Monitora o valor de um estado 
   * 
   * Retorno
   * Forma real do RETORNO useState é um array com: 
   *  "valor do estado" - Valor real do estado. Manipulavel pelo callback 'dispatchSetState'
   *  "função dispatchSetState()" - callback para mudar o valor do estado
   * 
   */
  const btnState = React.useState(false);
  const btnStateValue = btnState[0];
  const btnStateDispatch = btnState[1];
  console.log(btnStateValue,btnStateDispatch);


  /**
   * A mesma coisa de cima usando desestruturação(destructuring assignment)
   * Linguagem mais resumida e funcional 
   * 
   * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
   */
  const [ ativo, setAtivo ] = React.useState(false); // desestruturação de um array é com modificador []
  console.log(ativo,setAtivo);

  const handleClick = (e) => {
    setAtivo(!ativo); // toggle ativo
  };

  return (
    <button onClick={ handleClick }>Button</button>
  )
}
