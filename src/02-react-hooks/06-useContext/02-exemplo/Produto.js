import React from 'react'
import {GlobalContext} from './GlobalContext';

export default function Produto() {

  const {carrinho, setCarrinho} = React.useContext(GlobalContext);

  const handleClick = () => {
    setCarrinho( (produto) => {
      return produto + 1;
    });
  }

  return (
    <div>
      <p>Total: {carrinho} </p>
      <button onClick={ handleClick } >Adicionar Carrinho</button>
    </div>
  )
}
