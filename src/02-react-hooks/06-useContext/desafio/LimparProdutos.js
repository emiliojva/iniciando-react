import React from 'react'
import { GlobalContext } from './GlobalContext'

export default function LimparProdutos() {

  const {limpar} = React.useContext(GlobalContext);


  return (
    <div>
      <button onClick={limpar}>Limpar Produtos</button>
    </div>
  )
}
