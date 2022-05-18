import React from 'react'

 /**
  * Cria um botão para exibir um modal. 
  * Com base em um callback de estado.
  * Passado para o component atraves de props.
  * 
  * Anexada forma de passar callbacks para funções de estado
  * 
  * @returns React.Component
  */ 
 const ButtonModal = ( {setModal} ) => {

  const handleClick = () => {
    // setModal(true)
    setModal( (ativo) => !ativo );
  };
  return (
    <button onClick={handleClick}>Abrir</button>
  )
}

export default ButtonModal;