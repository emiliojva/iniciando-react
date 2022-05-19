import React from 'react'

/**
 * Componente Montou
 * O useEffect será especialmente utilizado quando precisamos definir um efeito que deve ocorrer uma vez apenas, como o fetch de dados no servidor por exemplo.
 * @returns React.Component
 */
export default function Exemplo3() {

  const [contar, setContar] = React.useState(0);
  const [modal, setModal] = React.useState(false);

  /**
   * Exemplo 3 - Múltiplos Efeitos 
   * 
   * Podemos ter diversos useEffect no nosso código. 
   * O ideal é separarmos efeitos diferentes em useEffect diferentes.
   */
  React.useEffect( () => {
    document.title = 'Total ' + contar;
    console.log('executou effect no contar e mudou titulo: ', document.title);
  }, [contar]);

  React.useEffect( () => {
    console.log('executou effect para zerar contagem: ', modal)
    setContar(0);
  }, [modal]);

  

  return (
    <div>
      <i>Exemplo3 - </i>
      <hr />

      {modal && <p>Meu Modal</p>}
      <button onClick={() => setModal(!modal)}>Modal</button>
      <hr />
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  )
}
