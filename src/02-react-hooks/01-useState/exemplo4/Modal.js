import React from 'react'

/**
 * Representação de um modal que abre/fecha de acordo com estado(state modal) passado
 * @param {*} param0 
 * @returns 
 */
export default function Modal( {modal, setModal} ) {
  if(modal === false) return null; // exibe o modal se a props modal for true. A propriedade é um estado oriundo de Exemplo4
  return (
    <div>
      Esse é um modal. 
      <button onClick={ () => {setModal(false)}} >Fechar</button>
    </div>
  )
};
