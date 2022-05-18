import React from 'react'
import ButtonModal from './ButtonModal'
import Modal from './Modal';

/**
 * Exemplo - Mostra como passar states(estados) para outros compoments.
 * A representação de modal será alterada por outros compoments com base no state modal e seu calback
 *  - ButtonModal para abrir
 *  - Button dentro do modal para fechar
 * 
 * @returns 
 */
export default function Exemplo5() {
  
  const [modal, setModal] = React.useState(false);
  let [items, setItems] = React.useState('Teste');

  /* Forma errada de manipular alteração de estado */
  const handleClickNotReactive = () => { items = 'Outro'; };
  
  /* Forma correta de manipular alteração de estado com uso da função callback do useState */
  const handleClickReactive = () => { setItems('Outro'); };

  return (
    <div>
      <p>{items}</p>

      {/* acessando o estado 'items' direto */}
      <button onClick={handleClickNotReactive}>Clicar - Não reativo </button> 

      <br /> <br />

      {/* usando o dispatchFunction do useStates para alterar o valor do estado */}
      <button onClick={handleClickReactive}>Clicar - Reativo </button>

      <hr />
      <div>{modal ? 'Modal Aberto' : 'Modal Fechado'}</div>
      <hr />
      <Modal setModal={setModal} modal={modal} />
      <ButtonModal setModal={setModal} />
    </div>
  )
}
