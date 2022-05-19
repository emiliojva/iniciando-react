import React from 'react'

/**
 * React.useRef()
 * ==============
 */
export default function Exemplo3() {

  const [contar, setContar] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  const timeoutRef = React.useRef()

  function handleClick() {

    setNotificacao('Item adicionado ao carrinho');

    console.info(new Date().toLocaleString());

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout( () => {
      setNotificacao(null);
      console.info(new Date().toLocaleString());
    },1000);

    setContar(contar+1)

  }

  return (
    <div>
      Exemplo3 <hr />


      <p>{notificacao}</p>

      <button onClick={handleClick}>Adicionar Carrinho: {contar}</button>

    </div>
  )
}