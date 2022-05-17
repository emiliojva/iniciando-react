import React from 'react';

function Arrays(){
  const produtos = ['Notebook', 'Tablet', 'Smartphone'];
  const produtosList = [<li key="p1">Notebook</li>, <li key="p2">Tablet</li>, <li key="p3">Smartphone</li>]; // sempre que ver tags dentro de um  escopo javascript, como nesse array com tags, lembre-se que o babel(presets) faz isso com JSX. Ao usar essa abortadem, todo elemento/componente precisa de um id único para fins de indexação do jsx.
  const musicos = ['Edmota', 'Brian Mcnight', 'Stevie Wonder'];
  const styleBox = {padding: '10px', border: '1px solid', margin: '10px 0px'};
  const arrayObjetosFilmes = [
    {nome: "Game of Thrones", ano: 2005},
    {nome: "A Clash of Kings", ano: 1998},
    {nome: "A Storm of Swords", ano: 2000},
  ];

  return (
    <React.Fragment>
      <hr />JSX Arrays 1  <hr />
      <div style={ styleBox }>
        Array primitivo intepretado como string na interpolação
        {produtos}
      </div> {/* O comportamento padrão da interpolação {} será usar o método toString() do array. Mostrando cada palavra colada na outra  */} 
      
      <div style={ styleBox }>
        Lista de Produtos com Array JSX com LIs
        <ul>
          {produtosList}
        </ul>
      </div>

      <div style={ styleBox }>
        Melhor prática para iterar Array com elementos. É refazer o array usando método map do js. 
        <ul>
          {musicos.map( (musico) => <li key={musico}>{musico}</li>)}
        </ul>
      </div>

      <div style={ styleBox }>
        Array com Objects. Usando filter e map juntos dentro de uma interpolação 
        <ul>
          {
            arrayObjetosFilmes
              .filter( ({ano}) => ano < 2000 ) // ({ano}) assign destruction(desestruturação de um objeto em partes). Retorna array filtrado com filmes do ano 2000 em diante
              .map( ({nome, ano}) => <li key={nome}>{nome}, {ano}</li> )
          }
        </ul>
      </div>


    </React.Fragment>
  )
}

export default Arrays;