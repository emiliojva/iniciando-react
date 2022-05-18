import React from 'react'
import ButtonModal from './ButtonModal'
import Modal from './Modal';

/**
 * Exemplo7 - Transformação do exemplo 4 usando Callbacks.
 * As chamadas de useState e setModal agora usam callbacks apropriados do useState
 * 
 * @returns 
 */
export default function Exemplo7() {
  
  const [modal, setModal] = React.useState( () => {
    // exemplo pegando um valor do localStorage
    return window.localStorage.getItem('estadoAtivoStoraged') || true;
  }); // usando callbacks posso fazer tratativas prévias ou pegar valor de outro lugar

  return (
    <div>
      <div>{modal ? 'Modal Aberto' : 'Modal Fechado'}</div>
      <hr />
      <Modal setModal={setModal} modal={modal}/>
      <ButtonModal setModal={setModal}/>
    </div>
  )
}
