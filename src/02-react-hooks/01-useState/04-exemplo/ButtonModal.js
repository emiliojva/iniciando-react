import React from 'react'

 /**
  * Cria um botão para exibir um modal. 
  * Com base em um callback de estado.
  * Passado para o component atraves de props.
  * 
  * @param {*} param0 
  * @returns 
  */ 
 const ButtonModal = ( {setModal} ) => {

  const handleClick = () => {setModal(true)};
  return (
    <button onClick={handleClick}>Abrir</button>
  )
}

export default ButtonModal;