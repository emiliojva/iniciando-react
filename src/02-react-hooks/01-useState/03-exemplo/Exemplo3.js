import React from 'react'

/**
 * Multiplos estados
 * @returns 
 */
export default function Exemplo3() {

  const [ ativo, setAtivo ] = React.useState(false); // desestruturação de um array é com modificador []
  const [dados, setDados] = React.useState({nome: 'Mateus', 'idade': '2'})

  const handleClick = (e) => {
    setAtivo(!ativo); // toggle ativo
    setDados({...dados, faculdade: 'Possui Faculdade'}); /* spread com objetos: {...objeto, novaProp: 'valor'}spread com objetos   */ 
  };

  return (
    <div>
      <button onClick={ handleClick }>Button</button>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
    </div>
  )
}
