import React from 'react'
import ButtonModal from './ButtonModal'
import Modal from './Modal';

/**
 * Exemplo4 - Mostra como passar states(estados) para outros compoments.
 * A representação de modal será alterada por outros compoments com base no state modal e seu calback
 *  - ButtonModal para abrir
 *  - Button dentro do modal para fechar
 * 
 * @returns 
 */
export default function Exemplo4() {
  
  const [modal, setModal] = React.useState(false);

  return (
    <div>
      <div>{modal ? 'Modal Aberto' : 'Modal Fechado'}</div>
      <hr />
      <Modal setModal={setModal} modal={modal}/>
      <ButtonModal setModal={setModal}/>
    </div>
  )
}
