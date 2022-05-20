import React from 'react'
import { useLocalStorage } from './useLocalStorage'

/**
 * React Custom Hooks 
 * ==============
 */
export default function Exemplo1() {

  const [produto, setProduto] = useLocalStorage('produto');

  console.log(produto);

  const handleClick = ( {target} ) => {
    setProduto(target.innerText);
  };


  return (
    <div>
      <p>Preferido: {produto}</p>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
    </div>
  )
};