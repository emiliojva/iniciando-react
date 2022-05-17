import React from 'react'

/**
 * Exemplo 1 - Simulando situação de estado (states)
 * @returns React.Component
 */
export default function Exemplo1() {
  
  let ativo = true;
  const handleClick = () => {
    ativo = !ativo;
    console.log(ativo);
  };

  return (
    <button onClick={handleClick}>{ativo ? 'ativo' : 'Inativo'}</button>
  )
}