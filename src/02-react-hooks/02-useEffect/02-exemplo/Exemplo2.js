import React from 'react'

/**
 * Componente Montou
 * O useEffect será especialmente utilizado quando precisamos definir um efeito que deve ocorrer uma vez apenas, como o fetch de dados no servidor por exemplo.
 * @returns React.Component
 */
export default function Exemplo2() {

  const [contar, setContar] = React.useState(0);
  const [dados , setDados ] = React.useState(null);

  /**
   * Esse effect sem dependencias só executa na primeira renderização
   */
  React.useEffect( () => {
    console.log('executou effect unica vez')
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
      .then( (response) => response.json())
      .then( (json) => setDados(json))
  }, []);

  // React.useEffect( () => {
  //   console.log(dados)
  // }, [dados]);

  

  return (
    <>
      <i>Exemplo2 - Hook UseEffect é acionado Para consumir API na abertura do App</i>
      <hr />
      <div>
        {dados &&  (
          <React.Fragment>
            <h1>{dados.nome}</h1>
            <p>R$ {dados.preco * contar} </p>
          </React.Fragment>
        )}
        <button onClick={ () => setContar(contar + 1)} >{contar}</button>
      </div>
    </>

  )
}
