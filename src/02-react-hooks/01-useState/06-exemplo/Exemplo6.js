import React from 'react'

/**
 * Não modifique o estado diretamente. 
 * Utilize sempre a função de atualização do estado.
 * Pois ela que garante a reatividade dos componentes.
 */
export default function Exemplo6() {

  const [items, setItems] = React.useState(['Item 1', 'Item 2']);

  // Forma não reativa. Irá alterar o valor de 'items' mas não vai renderizar 
  const handleClick = () => { 
    items.push(`Item ${items.length + 1}`);
  };
  
  // forma reativa - Alterar valor de items e lança alteração de estado "setItems()"
  const handleClickReativo = () => { 
    setItems([...items, `Item ${items.length + 1} (Reativo)`]) 
  };

  return (
    <div>Exemplo6 <hr />

    total {items.length}

      <ul>
        {
          items.map( (item, key) => {
            return <li key={key}>{item}</li>
          })
        }
      </ul>
      
      <button onClick={handleClick}>Adicionar Item (Não Reativo)</button>
      <br /><br />
      <button onClick={handleClickReativo}>Adicionar Item (Reativo)</button>

    </div>
  );
}
