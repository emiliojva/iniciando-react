import React from 'react'

/**
 * Explicação do component React.StrictMode
 * 
 * Que possui função de perceber estouros de memória(stackOverFlow)
 * React.Strict renderiza duas vezes nesses casos.
 * Sendo está sua função, monitorar códigos rendundates que geram stackOverFlow
 */
export default function Exemplo8() {

  const [contar, setContar] = React.useState(1);
  const [items , setItems ] = React.useState(['Item 1']);

  const handleClick = () => {
    setContar( (contar) => {
      // para corrigir o efeito colateral. Podemos atualizar os items fora de setContar.
      // setItems( (items) => [...items, 'Item ' + (contar + 1) ]); // colocando aqui cria um efeito colateral e o React.Strict renderiza duas vezes. Sendo está sua função, monitorar códigos rendundates e que geram stackOverFlow
      return contar + 1
    });
    // Agora pertence ao click
    setItems( (items) => [...items, 'Item ' + (contar + 1) ]); // colocando aqui cria um efeito colateral e o React.Strict renderiza duas vezes. Sendo está sua função, monitorar códigos rendundates e que geram stackOverFlow
  };

  return (
    <div>
      Exemplo 8 - Explicação do {"<React.StrictMode />"} <hr />

      
      <ul style={ items.length > 0 ? { display: 'block'} : { display: 'none'} }>
        {items.map( (item, index) => {
          return <li key={ index }>{ item }</li>
        })}
      </ul>
      <button onClick={handleClick}>{contar}</button>
    </div>
  );
}
