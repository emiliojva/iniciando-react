import React from 'react'
import {GlobalContext} from './GlobalContext';

export default function Produto() {

  // const {produtos} = React.useContext(GlobalContext);
  const {produtos} = React.useContext(GlobalContext);

  if(produtos.length === 0) return null;

  console.log(produtos)

  return (
    <div>
      <p>Total: {produtos.length}</p>

      <ul>
        {produtos.map( (produto) => <li key={produto.id} >{produto.nome}</li>)}
      </ul>
      
    </div>
  )
}
